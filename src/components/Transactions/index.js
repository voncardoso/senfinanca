import './style.css';

const Transactions = () =>{
    return(
        <section className='Transactionstable'>
            <table>
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
                    <tr>
                        <td>Lanche</td>
                        <td>R$ 15.000,00</td>
                        <td>Saida</td>
                        <td>18/03/2022</td>
                    </tr>
                    <tr>
                        <td>Lanche</td>
                        <td>R$ 15.000,00</td>
                        <td>Saida</td>
                        <td>18/03/2022</td>
                    </tr>
                </tbody>
            </table>
        </section>

    )
}

export default Transactions;