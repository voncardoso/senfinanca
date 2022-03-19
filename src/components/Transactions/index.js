import {db} from '../../firebase/config';
import { collection, addDoc, getDocs, updateDoc, doc} from "firebase/firestore";
import { useEffect, useState } from 'react';
import UpadateModal from '../../components/UpdateModal';
import UpdateImg from '../../assets/iconUpdate.svg';
import DeleteImg from '../../assets/IconDelete.svg';
import { useTransactions } from '../../hooks/UseTransactions';
import './style.css';

const Transactions = () =>{
    const {transactions, deleteUser, setId, filterentradas, filter} = useTransactions()
    const [isNewUpdateModalOpen, setIsNewUpdateContractOpen] = useState(false);

    function handleOpenNewUpdateContractModal() {
        setIsNewUpdateContractOpen(true);
    }
    
    function handleCloseNewUpdateContractModal() {
        setIsNewUpdateContractOpen(false);
        window.location.reload();
    }
    let id = '';
    
    return(
        <>
            <section className='Transactionstable'>
                <table className='tableList'>
                    <thead>
                        <tr>
                            <th>Titulo</th>
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
                               if(transaction.typetransactions === filter){
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
                                                    handleOpenNewUpdateContractModal();
                                                    setId(transaction.id);
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
                                                handleOpenNewUpdateContractModal();
                                                setId(transaction.id);
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
                        if(transaction.typetransactions === filter){
                            return(
                                <div>
                                    <p>{transaction.titulo}</p>
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
                                <p>{transaction.titulo}</p>
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
                OnRequestClose={handleCloseNewUpdateContractModal}
                id={id}
            />
        </>
    )
}

export default Transactions;