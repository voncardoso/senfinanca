import { useState } from "react";
import Modal from '../TransactionModal'
import logoImg from '../../assets/Logo.svg';
import pesquisaImg from '../../assets/AiOutlineSearch.svg';
import adicionarImg from '../../assets/Adicionar.svg';
import FilterModal from "../FilterModal"; 
import './style.css';


const Header = () => {
    const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);
    const [isNewFilterModalOpen, setIsNewFilterOpen] = useState(false);
    function handleOpenNewTransactionModal() {
        setIsNewTransactionOpen(true);
      }
  
      function handleCloseNewTransactionModal() {
        setIsNewTransactionOpen(false);
      }

      function handleOpenNewFilterModal() {
        setIsNewFilterOpen(true);
      }
  
      function handleCloseNewFilterModal() {
        setIsNewFilterOpen(false);
      }
      console.log(isNewTransactionModalOpen)
    return(
        <>
            <header>
                <nav>
                    <img src={logoImg} alt="logo" />
                    <div>
                        <button
                            onClick={handleOpenNewFilterModal}
                        >
                            <img className='imgNav' src={pesquisaImg} alt="pesquisar transação" />
                        </button>
                        <button
                            onClick={handleOpenNewTransactionModal}
                        >
                            <img className='imgNav' src={adicionarImg} alt="pesquisar transação" />
                        </button>
                    </div>
                </nav>
            </header>

            <Modal
                isOpen={isNewTransactionModalOpen} 
                OnRequestClose={handleCloseNewTransactionModal}
            />
            <FilterModal
                 isOpen={isNewFilterModalOpen} 
                 OnRequestClose={handleCloseNewFilterModal}
            />
        </>
    )
}

export default Header;