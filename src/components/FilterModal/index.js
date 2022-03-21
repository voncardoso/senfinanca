import {useContext, useState} from 'react';
import  ModalFilter  from "react-modal";
import { useTransactions } from '../../hooks/UseTransactions';
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


const FilterModal = ({isOpen,OnRequestClose}) => {
    const {setFilter, filter, setFilterInput, filterInput, transactions} = useTransactions();
    const [cor, setCor] = useState('');
    const [cor1, setCor1] = useState('');
    const [cor2, setCor2] = useState('');
    const [cor3, setCor3] = useState('');
    const [cor4, setCor4] = useState('');
    const [cor5, setCor5] = useState('');
    const [cor6, setCor6] = useState('');
    const [cor7, setCor7] = useState('');
    const [cor8, setCor8] = useState('');
    const [cor9, setCor9] = useState('');
    const [cor10, setCor10] = useState('');
    const [cor11, setCor11] = useState('');


    return(
        <ModalFilter
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            overlayClassName="react-modal-overlay-filter"
            className="react-modal-content-filter"
        >
        <>
        <h2>Filtros</h2>
        {
            /**        <input 
            className='inputFilter' 
            type='search'
            id='pesquisa'
            placeholder='Digite a descrição'
            onChange={(event)=> {
                setFilterInput(event.target.value)
            }}
            value={filterInput}
        /> */
        }
            <ul className='UlIconsFilter'>
                    <li>
                        <button 
                            style={{filter: cor}}
                            onClick={()=>{
                                setFilter(' ');
                                setCor('brightness(0.7)');
                                setCor1('');
                                setCor2('');
                                setCor3('');
                                setCor4('');
                                setCor5('');
                                setCor6('');
                                setCor7('');
                                setCor8('');
                                setCor9('');
                                setCor10('');
                                setCor11('');

                            }}
                        >
                            <img src={ todosImg } alt="" />
                        </button>
                        Todos
                    </li>
                    <li>
                        <button
                            style={{filter: cor1}}
                            onClick={()=>{
                                setFilter('Entrada');
                                setCor1('brightness(0.7)');
                                setCor('');
                                setCor2('');
                                setCor3('');
                                setCor4('');
                                setCor5('');
                                setCor6('');
                                setCor7('');
                                setCor8('');
                                setCor9('');
                                setCor10('');
                                setCor11('');
                            }}
                        >
                            <img src={ entradaImg } alt="" />
                        </button>
                        Entrada
                    </li>
                    <li>
                        <button
                            style={{filter: cor2}}
                            onClick={()=>{
                                setFilter('Saida');
                                setCor2('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor3('');
                                setCor4('');
                                setCor5('');
                                setCor6('');
                                setCor7('');
                                setCor8('');
                                setCor9('');
                                setCor10('');
                                setCor11('');
                            }}    
                        >
                            <img src={ saidaImg } alt="" />
                        </button>
                        Saida
                    </li>
                    <li>
                        <button
                            style={{filter: cor3}}
                            onClick={()=>{
                                setFilter('Saude');
                                setCor3('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor2('');
                                setCor4('');
                                setCor5('');
                                setCor6('');
                                setCor7('');
                                setCor8('');
                                setCor9('');
                                setCor10('');
                                setCor11('');
                            }}
                        >
                            <img src={ saudeImg  } alt="" />
                        </button>
                        Saúde
                    </li>
                    <li>
                        <button
                            style={{filter: cor4}}
                            onClick={()=>{
                                setFilter('Supermecado');
                                setCor4('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor2('');
                                setCor3('');
                                setCor5('');
                                setCor6('');
                                setCor7('');
                                setCor8('');
                                setCor9('');
                                setCor10('');
                                setCor11('');
                            }}
                        >
                            <img src={ supermercadoImg } alt="" />
                        </button>
                        Supermecado
                    </li>
                    <li>
                        <button
                            style={{filter: cor5}}
                            onClick={()=>{
                                setFilter('Transporte');
                                setCor5('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor2('');
                                setCor3('');
                                setCor4('');
                                setCor6('');
                                setCor7('');
                                setCor8('');
                                setCor9('');
                                setCor10('');
                                setCor11('');
                            }}
                        >
                            <img src={ tranporteImg } alt="" />
                        </button>
                        Transporte
                    </li>
                    <li>
                        <button
                            style={{filter: cor6}}
                            onClick={()=>{
                                setFilter('Casa');
                                setCor6('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor2('');
                                setCor3('');
                                setCor4('');
                                setCor5('');
                                setCor7('');
                                setCor8('');
                                setCor9('');
                                setCor10('');
                                setCor11('');
                            }}
                        >
                            <img src={ casaImg } alt="" />
                        </button>
                        Casa
                    </li>
                    <li>
                        <button
                            style={{filter: cor7}}
                            onClick={()=>{
                                setFilter('Vendas');
                                setCor7('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor2('');
                                setCor3('');
                                setCor4('');
                                setCor5('');
                                setCor6('');
                                setCor8('');
                                setCor9('');
                                setCor10('');
                                setCor11('');
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
                            style={{filter: cor8}}
                            onClick={()=>{
                                setFilter('Streaming/Jogos');
                                setCor8('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor2('');
                                setCor3('');
                                setCor4('');
                                setCor5('');
                                setCor6('');
                                setCor7('');
                                setCor9('');
                                setCor10('');
                                setCor11('');
                            }}
                        >
                            <img src={ streamingImg } alt="" />
                        </button>
                        Streaming/Jogos
                    </li>
                    <li>
                        <button
                            style={{filter: cor9}}
                            onClick={()=>{
                                setFilter('Celular');
                                setCor9('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor2('');
                                setCor3('');
                                setCor4('');
                                setCor5('');
                                setCor6('');
                                setCor7('');
                                setCor8('');
                                setCor10('');
                                setCor11('');
                            }}
                        >
                            <img src={ celularImg } alt="" />
                        </button>
                        Recarga de celular
                    </li>
                    <li>
                        <button
                            style={{filter: cor10}}
                            onClick={()=>{
                                setFilter('Restaurantes');
                                setCor10('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor2('');
                                setCor3('');
                                setCor4('');
                                setCor5('');
                                setCor6('');
                                setCor7('');
                                setCor8('');
                                setCor9('');
                                setCor11('');
                            }}
                        >
                            <img src={ restauranteImg } alt="" />
                        </button>
                        Restaurantes
                    </li>
                    <li>
                        <button
                            style={{filter: cor11}}
                            onClick={()=>{
                                setFilter('Viagem');
                                setCor11('brightness(0.7)');
                                setCor('');
                                setCor1('');
                                setCor2('');
                                setCor3('');
                                setCor4('');
                                setCor5('');
                                setCor6('');
                                setCor7('');
                                setCor8('');
                                setCor9('');
                                setCor10('');
                            }}
                        >
                            <img src={ viagemImg } alt="" />
                        </button>
                        Viagem
                    </li>
                </ul>

                <button 
                    className='buttonSalvarFiltro'
                        onClick={()=>{
                            OnRequestClose();
                            setCor('');
                            setCor1('');
                            setCor2('');
                            setCor3('');
                            setCor4('');
                            setCor5('');
                            setCor6('');
                            setCor7('');
                            setCor8('');
                            setCor9('');
                            setCor10('');
                            setCor11('');
                        }}
                    >
                        Filtrar
                    </button>
            </>
        </ ModalFilter>
    )
}



export default FilterModal;