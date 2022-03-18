import totalImg from '../../assets/Total.svg'
import './style.css'

const Summary = () => {
    return(
        <section>
            <div className='boxSummary entradas'>
                <header>
                    <p>Entradas</p>
                </header>
                <strong>
                    R$ 15.000,00
                </strong>
            </div>
            <div className='boxSummary saidas'>
                <header>
                    <p>Saidas</p>
                </header>
                <strong>
                    R$ 15.000,00
                </strong>
            </div>
            <div className='boxSummary boxBlue'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt=''/>
                </header>
                <strong>
                    R$ 15.000,00
                </strong>
            </div>
        </section>
    );
}

export default Summary;