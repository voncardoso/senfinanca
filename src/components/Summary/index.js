import totalImg from '../../assets/Total.svg'
import { useTransactions } from '../../hooks/UseTransactions';
import './style.css'

const Summary = () => {

    const {transactions} = useTransactions();
    
    const values = transactions.reduce((acc, transaction) =>{
        let valor = +transaction.valor
        if(transaction.typetransactions == 'Entrada'){
            acc.entradas += valor;
            acc.total += valor;
            console.log( acc.entradas)
        }else{
            acc.saidas += valor;
            acc.total -= valor;
        }
        return acc;
    },
    {
        entradas: 0,
        saidas: 0,
        total: 0,
    }
    );

    return(
        <section className='summary'>
            <div className='boxSummary entradas'>
                <header>
                    <p>Entradas</p>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(values.entradas)}
                </strong>
            </div>
            <div className='boxSummary saidas'>
                <header>
                    <p>Saidas</p>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(values.saidas)}
                </strong>
            </div>
            <div className='boxSummary boxBlue'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt=''/>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(values.total)}
                </strong>
            </div>
        </section>
    );
}

export default Summary;