import logoImg from '../../assets/Logo.svg';
import pesquisaImg from '../../assets/AiOutlineSearch.svg';
import adicionarImg from '../../assets/Adicionar.svg';

import './style.css';

const Header = () => {
    return(
        <header>
            <nav>
                <img src={logoImg} alt="logo" />
                <div>
                    <button>
                        <img className='imgNav' src={pesquisaImg} alt="pesquisar transação" />
                    </button>
                    <button>
                        <img className='imgNav' src={adicionarImg} alt="pesquisar transação" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;