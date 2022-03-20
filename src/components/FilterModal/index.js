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
    const {setFilter} = useTransactions();
    
    return(
        <ModalFilter
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            overlayClassName="react-modal-overlay-filter"
            className="react-modal-content-filter"
        >
        <>
        <h2>Filtros</h2>
        <input 
            className='inputFilter' 
            type="text" 
            placeholder='Digite o que estar buscando'
            onChange={(event)=> setFilter(event.target.value)}
        />
            <ul className='UlIconsFilter'>
                    <li>
                        <button 
                            onClick={()=>{
                                setFilter('');
                            }}
                        >
                            <img src={ todosImg } alt="" />
                        </button>
                        Todos
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Entrada');
                            }}
                        >
                            <img src={ entradaImg } alt="" />
                        </button>
                        Entrada
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Saida');
                            }}    
                        >
                            <img src={ saidaImg } alt="" />
                        </button>
                        Saida
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Saude');
                            }}
                        >
                            <img src={ saudeImg  } alt="" />
                        </button>
                        Saúde
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Supermecado');
                            }}
                        >
                            <img src={ supermercadoImg } alt="" />
                        </button>
                        Supermecado
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Transporte');
                            }}
                        >
                            <img src={ tranporteImg } alt="" />
                        </button>
                        Transporte
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Casa');
                            }}
                        >
                            <img src={ casaImg } alt="" />
                        </button>
                        Casa
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Vendas');
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
                                setFilter('Streaming/Jogos');
                            }}
                        >
                            <img src={ streamingImg } alt="" />
                        </button>
                        Streaming/Jogos
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Celular');
                            }}
                        >
                            <img src={ celularImg } alt="" />
                        </button>
                        Recarga de celular
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Restaurantes');
                            }}
                        >
                            <img src={ restauranteImg } alt="" />
                        </button>
                        Restaurantes
                    </li>
                    <li>
                        <button
                            onClick={()=>{
                                setFilter('Viagem');
                            }}
                        >
                            <img src={ viagemImg } alt="" />
                        </button>
                        Viagem
                    </li>
                </ul>

                <button 
                    className='buttonSalvarFiltro'
                    onClick={OnRequestClose}
                    >Filtrar</button>
            </>
        </ ModalFilter>
    )
}



export default FilterModal;