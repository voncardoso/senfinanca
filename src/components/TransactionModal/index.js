
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc} from "firebase/firestore";
import {db} from '../../firebase/config';
import  Modal  from "react-modal";
import './style.css'



Modal.setAppElement('#root');

const TransactionModal = ({isOpen,OnRequestClose}) =>{
    const [typetransactions, setTypetransactions] = useState('');
    const [entradaColor, setEntradaColor] = useState('');
    const [saidaColor, setSaidaColor] = useState('');
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    
    const usersCollectionRef = collection(db, "transacoes");

    function teste(){
        console.log('aqui');
        create ()
    }
    async function create (){
        console.log('passou');
        await addDoc(usersCollectionRef, {
            titulo: titulo,
            valor: valor,
            categoria: categoria,
            typetransactions: typetransactions,
        });
        setTitulo('');
        setValor('');
        setCategoria('');
        setTypetransactions('');
        OnRequestClose();
    }

    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <form>
                <h2>Cadastrar Finanças</h2>
                <div className='Tipetransaction'>
                   <button 
                        className='transactionEntrada'
                        style={{background: entradaColor}}
                        onClick={(event)=>{
                            event.preventDefault();
                            setEntradaColor('#50A424')
                            setSaidaColor('')
                            setTypetransactions('Entrada')
                        }}
                    >
                        Entrada
                    </button>
                   <button 
                   className='transactionSaida'
                   style={{background: saidaColor}}
                        onClick={(event)=>{
                            event.preventDefault();
                            setSaidaColor('#F14F34');
                            setEntradaColor('')
                            setTypetransactions('Saida')
                        }}
                   >
                       Saida
                    </button>
                </div>
                <input type="text" 
                    placeholder='titulo'
                    onChange={(event)=> setTitulo(event.target.value)}
                    value={titulo}
                />
                <input type="number" 
                    placeholder='valor'
                    value={valor}
                    onChange={(event)=> setValor(event.target.value)}                   
                />
                <input type="text" 
                placeholder='Categoria'
                value={categoria}
                onChange={(event)=> setCategoria(event.target.value)}                
                />
            </form>
            <button className='cadastrar' onClick={create}>Cadastrar</button>
        </Modal>
    )
}

export default TransactionModal;