import {db} from '../../firebase/config';
import { collection, addDoc, getDocs, updateDoc, doc} from "firebase/firestore";
import { useEffect, useState } from 'react';
import UpadateModal from '../../components/UpdateModal';
import UpdateImg from '../../assets/iconUpdate.svg';
import DeleteImg from '../../assets/IconDelete.svg';
import { useTransactions } from '../../hooks/UseTransactions';
import './style.css';
import ConfigModal from '../ConfigModal';

const Transactions = () =>{
    const {
        transactions, 
        deleteUser, 
        setId, 
        filterentradas,
        filter, 
        setTitulo, 
        setValor,
        setCategoria,
        valor,
        titulo
    } = useTransactions()
    const [isNewUpdateModalOpen, setIsNewUpdateOpen] = useState(false);
    const [isNewConfigModalOpen, setIsNewConfigOpen] = useState(false);
    let id = '';
    function handleOpenNewUpdateModal() {
        setIsNewUpdateOpen(true);
    }
    
    function handleCloseNewUpdateModal() {
        setIsNewUpdateOpen(false);
        window.location.reload();
    }

    function handleOpenNewConfigModal() {
        setIsNewConfigOpen(true);
    }
    
    function handleCloseNewConfigModal() {
        setIsNewConfigOpen(false);
        window.location.reload();
    }
    
    
    return(
        <>
            <section className='Transactionstable'>
                <table className='tableList'>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Categoria</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction)=>{
                             let cor = '';
                             if(transaction.typetransactions == "Entrada"){
                                  cor = '#50A424'
                             }else{
                                 cor = '#F14F34'
                             }                 
                             
                           if(filterentradas != ''){
                               if(transaction.typetransactions === filter || transaction.categoria === filter){
                                console.log('transaction.typetransactions, filter', filter)          
                                return(
                                    <tr>
                                        <td key={transaction.titulo}>{transaction.titulo}</td>
                                        <td 
                                            style={{color: cor}}
                                        >
                                            {new Intl.NumberFormat('pt-BR',{
                                                            style: 'currency',
                                                            currency: 'BRL'
                                            }).format(transaction.valor)}
                                        </td>
                                        <td>{transaction.categoria}</td>
                                        <td>{transaction.timestemp}</td>
                                        <td>
                                            <button 
                                                style={{background: 'none'}}
                                                onClick={()=>{
                                                    handleOpenNewUpdateModal();
                                                    setId(transaction.id);
                                                    setTitulo(transaction.titulo)
                                                    setValor(transaction.valor)
                                                }}
                                            >
                                                <img src={UpdateImg} alt="Icone de Update" />
                                            </button>
                                        </td>
                                        <td>
                                            <button 
                                                style={{background: 'none'}}
                                                onClick={()=>{
                                                    deleteUser(transaction.id);
                                                    
                                                }}
                                            >
                                                 <img src={DeleteImg} alt="Icone de delete" />
                                            </button>
                                        </td>
                                        
                                    </tr>
                                )
                               }
                           }else{
                            return(
                                <tr>
                                    <td key={transaction.titulo}>{transaction.titulo}</td>
                                    <td 
                                        style={{color: cor}}
                                    >
                                        {new Intl.NumberFormat('pt-BR',{
                                                        style: 'currency',
                                                        currency: 'BRL'
                                        }).format(transaction.valor)}
                                    </td>
                                    <td>{transaction.categoria}</td>
                                    <td>{transaction.timestemp}</td>
                                    <td>
                                        <button 
                                            style={{background: 'none'}}
                                            onClick={()=>{
                                                handleOpenNewUpdateModal();
                                                setId(transaction.id);
                                                setTitulo(transaction.titulo)
                                                setValor(transaction.valor)
                                            }}
                                        >
                                            <img src={UpdateImg} alt="Icone de Update" />
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            style={{background: 'none'}}
                                            onClick={()=>{
                                                deleteUser(transaction.id);
                                            }}
                                        >
                                             <img src={DeleteImg} alt="Icone de delete" />
                                        </button>
                                    </td>
                                    
                                </tr>
                            )
                           }
                        })}
                    </tbody>
                </table>
            </section>

            <section className='TransactionstableMobile'>
                <h3>Listagem</h3>
                {transactions.map((transaction)=>{
                    let cor = '';
                    if(transaction.typetransactions == "Entrada"){
                        cor = '#50A424'
                    }else{
                        cor = '#F14F34'
                    }
                     if(filterentradas != ''){
                        if(transaction.typetransactions === filter || transaction.categoria === filter ){
                            return(
                                <div>
                                    <ul className='configUl'>
                                        <li>
                                            <p>{transaction.titulo}</p>
                                        </li>
                                        <li>
                                            <button
                                                onClick={()=>{
                                                    handleOpenNewConfigModal();
                                                    setId(transaction.id)
                                                }}
                                            >. . .</button>
                                        </li>
                                    </ul>
                                    
                                    <strong  style={{color: cor}}> 
                                        {new Intl.NumberFormat('pt-BR',{
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(transaction.valor)}</strong>
                                    <ul>
                                        <li>{transaction.categoria}</li>
                                        <li>{transaction.timestemp}</li>
                                    </ul>
                                </div>
                            )
                        }
                     }else{
                        return(
                            <div>
                                <ul className='configUl'>
                                    <li>
                                        <p>{transaction.titulo}</p>
                                    </li>
                                    <li>
                                        <button
                                            onClick={()=>{
                                                handleOpenNewConfigModal();
                                                setId(transaction.id)
                                            }}
                                        >. . .</button>
                                    </li>
                                </ul>
                                <strong  style={{color: cor}}> 
                                    {new Intl.NumberFormat('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.valor)}</strong>
                                <ul>
                                    <li>{transaction.categoria}</li>
                                    <li>{transaction.timestemp}</li>
                                </ul>
                            </div>
                        )
                     }
                })}
            </section>
            <UpadateModal
                isOpen={isNewUpdateModalOpen} 
                OnRequestClose={handleCloseNewUpdateModal}
                id={id}
            />
             <ConfigModal
                isOpen={isNewConfigModalOpen} 
                OnRequestClose={handleCloseNewUpdateModal}
                id={id}
            />
        </>
    )
}

export default Transactions;