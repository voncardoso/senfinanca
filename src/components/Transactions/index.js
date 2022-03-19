import {db} from '../../firebase/config';
import { collection, addDoc, getDocs, updateDoc, doc} from "firebase/firestore";
import './style.css';
import { useEffect, useState } from 'react';

const Transactions = () =>{
    const [transactions, setTransactions] = useState([]);
    const transactionsCollectionRef = collection(db, "transacoes");

    useEffect(()=>{
        const getTransactions = async () => {
            const data = await getDocs(transactionsCollectionRef);
            setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getTransactions();
    }, []);
    
    console.log(transactions);
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