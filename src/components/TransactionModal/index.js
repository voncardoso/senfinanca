
import {useState} from 'react';
import { collection, addDoc} from "firebase/firestore";
import {db} from '../../firebase/config';
import  Modal  from "react-modal";
import viagemImg from '../../assets/Viagem.svg';
import saudeImg from '../../assets/Saude.svg';
import closeImg from '../../assets/close.svg';
import supermercadoImg from '../../assets/Supermercado.svg';
import tranporteImg from '../../assets/Tranporte.svg';
import casaImg from '../../assets/Casa.svg';
import restauranteImg from '../../assets/Restaurante.svg'
import streamingImg from '../../assets/Streaming.svg'
import celularImg from '../../assets/Celular.svg';
import './style.css'



Modal.setAppElement('#root');


const TransactionModal = ({isOpen,OnRequestClose}) =>{
    const [typetransactions, setTypetransactions] = useState('Entrada');
    const [entradaColor, setEntradaColor] = useState('#50A424');
    const [saidaColor, setSaidaColor] = useState('');
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    const [cor, setCor] = useState('');
    const [cor1, setCor1] = useState('');
    const [cor2, setCor2] = useState('');
    const [cor3, setCor3] = useState('');
    const [cor4, setCor4] = useState('');
    const [cor5, setCor5] = useState('');
    const [cor6, setCor6] = useState('');
    const [cor7, setCor7] = useState('');
    const [cor8, setCor8] = useState('');
    const[ativo, setAtivo] = useState(true);
    const[buttonCor, setButtonCor] = useState('rgba(41, 76, 176, 0.5)');

    
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
            time: new Date(),
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
         <button 
            onClick={OnRequestClose} 
            className="rect-modal"
          >
            <img src={closeImg} alt="fechar modal" />
          </button>
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
                        required
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
                    placeholder='Descrição'
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
                <p className='categoriaP'>Escolha a categoria</p>
                 <ul className='UlIcons'>

                    <li>
                        <button
                            style={{filter: cor}}
                            type='button'
                            onClick={()=>{
                                    setCategoria('Saúde');
                                    setCor('brightness(0.7)');
                                    setCor1('');
                                    setCor2('');
                                    setCor3('');
                                    setCor4('');
                                    setCor5('');
                                    setCor6('');
                                    setCor7('');
                                    setCor8('');
                                    setAtivo(false);
                                    setButtonCor('rgba(41, 76, 176, 1)');
                                    
                            }}
                        >
                            <img src={ saudeImg  } alt="" />
                        </button>
                        Saúde
                    </li>
                    <li>
                        <button
                            style={{filter: cor1}}
                            type='button'
                            onClick={()=>{
                                    setCategoria('Supermecado');
                                    setCor1('brightness(0.7)');
                                    setCor('');
                                    setCor2('');
                                    setCor3('');
                                    setCor4('');
                                    setCor5('');
                                    setCor6('');
                                    setCor7('');
                                    setCor8('');
                                    setAtivo(false);
                                    setButtonCor('rgba(41, 76, 176, 1)');
                                    
                            }}
                        >
                            <img src={ supermercadoImg } alt="" />
                        </button>
                        Supermecado
                    </li>
                    <li>
                        <button
                            style={{filter: cor2}}
                            type='button'
                            onClick={()=>{
                                  setCategoria('Transporte');
                                  setCor2('brightness(0.7)');
                                  setCor('');
                                  setCor1('');
                                  setCor3('');
                                  setCor4('');
                                  setCor5('');
                                  setCor6('');
                                  setCor7('');
                                  setCor8('');
                                  setAtivo(false);
                                  setButtonCor('rgba(41, 76, 176, 1)');
                                  
                            }}
                        >
                            <img src={ tranporteImg } alt="" />
                        </button>
                        Transporte
                    </li>
                    <li>
                        <button
                            style={{filter: cor3}}
                            type='button'
                            onClick={()=>{
                                  setCategoria('Casa');
                                  setCor3('brightness(0.7)');
                                  setCor('');
                                  setCor1('');
                                  setCor2('');
                                  setCor4('');
                                  setCor5('');
                                  setCor6('');
                                  setCor7('');
                                  setCor8('');
                                  setAtivo(false);
                                  setButtonCor('rgba(41, 76, 176, 1)');
                                 
                            }}
                        >
                            <img src={ casaImg } alt="" />
                        </button>
                        Casa
                    </li>
                    <li>
                        <button
                            style={{filter: cor4}}
                            type='button'
                            onClick={()=>{
                                  setCategoria('Vendas');
                                  setCor4('brightness(0.7)');
                                  setCor('');
                                  setCor1('');
                                  setCor2('');
                                  setCor3('');
                                  setCor5('');
                                  setCor6('');
                                  setCor7('');
                                  setCor8('');
                                  setAtivo(false);
                                  setButtonCor('rgba(41, 76, 176, 1)');
                                 
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
                            style={{filter: cor5}}
                            onClick={()=>{
                                  setCategoria('Streaming/Jogos');
                                  setCor5('brightness(0.7)');
                                  setCor('');
                                  setCor1('');
                                  setCor2('');
                                  setCor3('');
                                  setCor4('');
                                  setCor6('');
                                  setCor7('');
                                  setCor8('');
                                  setAtivo(false);
                                  setButtonCor('rgba(41, 76, 176, 1)');
                                  
                            }}
                        >
                            <img src={ streamingImg } alt="" />
                        </button>
                        Streaming/Jogos
                    </li>
                    <li>
                        <button
                            style={{filter: cor6}}
                            type='button'
                            onClick={()=>{
                                    setCategoria('Celular');
                                    setCor6('brightness(0.7)');
                                    setCor('');
                                    setCor1('');
                                    setCor2('');
                                    setCor3('');
                                    setCor4('');
                                    setCor5('');
                                    setCor7('');
                                    setCor8('');
                                    setAtivo(false);
                                    setButtonCor('rgba(41, 76, 176, 1)');
                                  
                            }}
                        >
                            <img src={ celularImg } alt="" />
                        </button>
                        Celular
                    </li>
                    <li>
                        <button 
                            style={{filter: cor7}}
                            type='button'
                            onClick={()=>{
                                  setCategoria('Restaurantes');
                                  setCor7('brightness(0.7)');
                                  setCor('');
                                  setCor1('');
                                  setCor2('');
                                  setCor3('');
                                  setCor4('');
                                  setCor5('');
                                  setCor6('');
                                  setCor8('');
                                  setAtivo(false);
                                  setButtonCor('rgba(41, 76, 176, 1)');
                                 
                            }}
                        >
                            <img src={ restauranteImg } alt="" />
                        </button>
                        Restaurantes
                    </li>
                    <li>
                        <button 
                            style={{filter: cor8}}
                            type='button'
                            onClick={()=>{
                                  setCategoria('Viagem');
                                  setCor8('brightness(0.7)');
                                  setCor('');
                                  setCor1('');
                                  setCor2('');
                                  setCor3('');
                                  setCor4('');
                                  setCor5('');
                                  setCor6('');
                                  setCor7('');
                                  setAtivo(false);
                                  setButtonCor('rgba(41, 76, 176, 1)');

                            }}
                        > 
                            <img src={ viagemImg } alt="" />
                        </button>
                        Viagem
                    </li>
                </ul>
                 <button  
                    type='submit' 
                    style={{background: buttonCor}}
                    disabled={ativo} 
                    className='buttonCadastar'
                >
                        Cadastrar
                </button>
            </form>
        </Modal>
    )
}

export default TransactionModal;