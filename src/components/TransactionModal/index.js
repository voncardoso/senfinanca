import { useState } from 'react';
import  Modal  from "react-modal";
import './style.css'




const TransactionModal = ({isOpen,OnRequestClose}) =>{
    const [entrada, setEntrada] = useState('');
    const [saida, setSaida] = useState('');
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <form action="">
                <h2>Cadastrar Finanças</h2>
                <div className='Tipetransaction'>
                   <button 
                        className='transactionEntrada'
                        style={{background: entrada}}
                        onClick={(event)=>{
                            event.preventDefault();
                            setEntrada('#50A424')
                            setSaida('')
                        }}
                    >
                        Entrada
                    </button>
                   <button 
                   className='transactionSaida'
                   style={{background: saida}}
                        onClick={(event)=>{
                            event.preventDefault();
                            setSaida('#F14F34');
                            setEntrada('')
                        }}
                   >
                       Saida
                    </button>
                </div>
                <input type="text" 
                    placeholder='titulo'
                    value={titulo}
                    onChange={(event)=> setTitulo(event.target.value)}
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

                <button>Cadastrar</button>
            </form>
        </Modal>
    )
}

export default TransactionModal;