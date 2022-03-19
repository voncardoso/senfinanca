import {useContext, useState} from 'react';
import  ModalFilter  from "react-modal";
import { useTransactions } from '../../hooks/UseTransactions';
import './style.css'


const FilterModal = ({isOpen,OnRequestClose}) => {
    const {setFilter} = useTransactions();
    
    setFilter('Saida');

    
    return(
        <ModalFilter
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <h1>Teste Modal filter</h1>
        </ ModalFilter>
    )
}



export default FilterModal;