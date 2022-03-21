import {useContext, useState} from 'react';
import  UpdareModal  from "react-modal";
import { useTransactions } from '../../hooks/UseTransactions';
import closeImg from '../../assets/close.svg';
import './style.css'



const UpdateModal = ({isOpen,OnRequestClose}) => {
    const [entradaColor, setEntradaColor] = useState('');
    const [saidaColor, setSaidaColor] = useState('');

    const {upadteTransactions,
        setTypetransactions,
        setTitulo,
        setValor,
        setCategoria, 
        titulo, 
        valor,
        categoria,
        id,
    } = useTransactions();

    console.log(id);
    return(
    <UpdareModal
        isOpen={isOpen}
        onRequestClose={OnRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button 
            onClick={OnRequestClose} 
            className="rect-modal-close"
          >
            <img src={closeImg} alt="fechar modal" />
        </button>
        <form onSubmit={upadteTransactions}>
            <h2>Atualizar Finanças</h2>
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
             <button type='submit'>Cadastrar</button>
        </form>
    </ UpdareModal>
    );
}

export default UpdateModal;