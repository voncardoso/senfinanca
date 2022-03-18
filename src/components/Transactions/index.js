import './style.css';

const Transactions = () =>{
    return(
        <>
            <section className='Transactionstable'>
                <table className='tableList'>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Valor</th>
                            <th>Categoria</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lanche</td>
                            <td>R$ 15.000,00</td>
                            <td>Saida</td>
                            <td>18/03/2022</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='TransactionstableMobile'>
                <h3>Listagem</h3>

                <div>
                    <p>Desenvolvimento de site</p>
                    <strong className='entradaMobile'>R$ 15.00,00</strong>
                    <ul>
                        <li>Vendas</li>
                        <li>12/05/2022</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Transactions;