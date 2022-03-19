
import {useState} from 'react';
import { collection, addDoc} from "firebase/firestore";
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
        OnRequestClose();
        window.location.reload();
    }
    
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
                />
                <input type="text" 
                placeholder='Categoria'
                value={categoria}
                onChange={(event)=> setCategoria(event.target.value)}                
                />
                 <button type='submit'>Cadastrar</button>
            </form>
        </Modal>
    )
}

export default TransactionModal;