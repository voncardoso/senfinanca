import {useContext, useState} from 'react';
import  ModalConfig  from "react-modal";
import { useTransactions } from '../../hooks/UseTransactions';
import DeleteImg from '../../assets/IconDelete.svg';
import UpdateImg from '../../assets/iconUpdate.svg'
import closeImg from '../../assets/close.svg';
import './style.css'
import UpdateModal from '../UpdateModal';

ModalConfig.setAppElement('#root');

const ConfigModal = ({isOpen,OnRequestClose}) =>{
    const { transactions, deleteUser, id, setId} = useTransactions();
    const [isNewUpdateModalOpen, setIsNewUpdateOpen] = useState(false);

    function handleOpenNewUpdateModal() {
        setIsNewUpdateOpen(true);
    }
    
    function handleCloseNewUpdateModal() {
        setIsNewUpdateOpen(false);
        window.location.reload();
    }
    return(
        <>
        <ModalConfig
            isOpen={isOpen}
            onRequestClose={OnRequestClose}
            overlayClassName="react-modal-overlay-config"
            className="react-modal-content-config"
        >
            <button 
                onClick={OnRequestClose} 
                className="config-React"
            >
                <img src={closeImg} alt="fechar modal" />
            </button>

            <ul className='ConfigModal' >
                <li
                    onClick={()=>{
                        handleOpenNewUpdateModal();
                    }}
                >
                <button 
                    style={{background: 'none'}}
                    onClick={()=>{
                        handleOpenNewUpdateModal();
                    }}
                >
                    <img src={UpdateImg} alt="Icone de delete" />
                </button>                   
                    <p>Update</p>
                </li>
                <li  
                    onClick={()=>{
                        deleteUser(id);
                    }}
                >
                <button 
                    style={{background: 'none'}}
                    onClick={()=>{
                        deleteUser(id);
                    }}
                >
                    <img src={DeleteImg} alt="Icone de delete" />
                </button> 
                    <p>Delete</p>
                </li>
            </ul>
        </ModalConfig>

        <UpdateModal
            isOpen={isNewUpdateModalOpen} 
            OnRequestClose={handleCloseNewUpdateModal}
            id={id}
        />
    </>    
    );
}

export default ConfigModal;