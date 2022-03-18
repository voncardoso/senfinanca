import { useState } from "react";
import Modal from '../TransactionModal'
import logoImg from '../../assets/Logo.svg';
import pesquisaImg from '../../assets/AiOutlineSearch.svg';
import adicionarImg from '../../assets/Adicionar.svg';

import './style.css';

const Header = () => {
    const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionOpen(true);
      }
  
      function handleCloseNewTransactionModal() {
        setIsNewTransactionOpen(false);
      }
      console.log(isNewTransactionModalOpen)
    return(
        <>
            <header>
                <nav>
                    <img src={logoImg} alt="logo" />
                    <div>
                        <button>
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
        </>
    )
}

export default Header;