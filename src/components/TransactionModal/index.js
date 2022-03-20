
import {useState} from 'react';
import { collection, addDoc} from "firebase/firestore";
import {db} from '../../firebase/config';
import  Modal  from "react-modal";
import todosImg from '../../assets/Todos.svg';
import entradaImg from '../../assets/Entrada.svg';
import saidaImg from '../../assets/Saida.svg';
import viagemImg from '../../assets/Viagem.svg';
import saudeImg from '../../assets/Saude.svg';
import supermercadoImg from '../../assets/Supermercado.svg';
import tranporteImg from '../../assets/Tranporte.svg';
import casaImg from '../../assets/Casa.svg';
import restauranteImg from '../../assets/Restaurante.svg'
import streamingImg from '../../assets/Streaming.svg'
import celularImg from '../../assets/Celular.svg'
import './style.css'



Modal.setAppElement('#root');


const TransactionModal = ({isOpen,OnRequestClose}) =>{
    const [typetransactions, setTypetransactions] = useState('');
    const [entradaColor, setEntradaColor] = useState('');
    const [saidaColor, setSaidaColor] = useState('');
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    
    const transactionsCollectionRef = collection(db, "transacoes");


    async function Create(event){
        event.preventDefault();
        console.log('passou');
        await addDoc(transactionsCollectionRef, {
            titulo: titulo,
            valor: +valor,
            categoria: categoria,
            typetransactions: typetransactions,
            timestemp: new Date().toLocaleDateString(),
        });
        setTitulo('');
        setValor('');
        setCategoria('');
        setTypetransactions('');
        setEntradaColor('');
        OnRequestClose();
        window.location.reload();
    }

    console.log(categoria);
    
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <form onSubmit={Create}>
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
                    required
                />
                <input type="number" 
                    placeholder='valor'
                    value={valor}
                    onChange={(event)=> setValor(event.target.value)} 
                    required                  
                />
                <p className='categoriaP'>Categoria</p>
                 <ul className='UlIcons'>

                    <li>
                        <button
                            type='button'
                            onClick={()=>{
                                  setCategoria('Saúde');
                            }}
                        >
                            <img src={ saudeImg  } alt="" />
                        </button>
                        Saúde
                    </li>
                    <li>
                        <button
                            type='button'
                            onClick={()=>{
                                  setCategoria('Supermecado');
                            }}
                        >
                            <img src={ supermercadoImg } alt="" />
                        </button>
                        Supermecado
                    </li>
                    <li>
                        <button
                            type='button'
                            onClick={()=>{
                                  setCategoria('Transporte');
                            }}
                        >
                            <img src={ tranporteImg } alt="" />
                        </button>
                        Transporte
                    </li>
                    <li>
                        <button
                            type='button'
                            onClick={()=>{
                                  setCategoria('Casa');
                            }}
                        >
                            <img src={ casaImg } alt="" />
                        </button>
                        Casa
                    </li>
                    <li>
                        <button
                            type='button'
                            onClick={()=>{
                                  setCategoria('Vendas');
                            }}
                        >
                            <p 
                                style={{
                                    fontSize:"1.5rem", 
                                    color: '#FFFFFF',  
                                }}>$</p>
                        </button>
                        Vendas
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                  setCategoria('Streaming/Jogos');
                            }}
                        >
                            <img src={ streamingImg } alt="" />
                        </button>
                        Streaming/Jogos
                    </li>
                    <li>
                        <button
                            type='button'
                            onClick={()=>{
                                  setCategoria('Celular');
                            }}
                        >
                            <img src={ celularImg } alt="" />
                        </button>
                        Celular
                    </li>
                    <li>
                        <button 
                            type='button'
                            onClick={()=>{
                                  setCategoria('Restaurantes');
                            }}
                        >
                            <img src={ restauranteImg } alt="" />
                        </button>
                        Restaurantes
                    </li>
                    <li>
                        <button 
                            type='button'
                            onClick={()=>{
                                  setCategoria('Viagem');
                            }}
                        >
                            <img src={ viagemImg } alt="" />
                        </button>
                        Viagem
                    </li>
                </ul>
                 <button type='submit'>Cadastrar</button>
            </form>
        </Modal>
    )
}

export default TransactionModal;