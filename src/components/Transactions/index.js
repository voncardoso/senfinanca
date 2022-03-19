import {db} from '../../firebase/config';
import { collection, addDoc, getDocs, updateDoc, doc} from "firebase/firestore";
import './style.css';
import { useEffect, useState } from 'react';
import UpdateImg from '../../assets/iconUpdate.svg';
import DeleteImg from '../../assets/IconDelete.svg';
import { useTransactions } from '../../hooks/UseTransactions';

const Transactions = () =>{
    const {transactions, deleteUser} = useTransactions()
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
                            id = transaction.id;
                            console.log(id);
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
                                                deleteUser(transaction.id);
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
                })}
            </section>
        </>
    )
}

export default Transactions;