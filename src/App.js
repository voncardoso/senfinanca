import Header from './components/Header';
import Summary from './components/Summary';
import Transactions from './components/Transactions';
import {TransactionProvaider} from './hooks/UseTransactions'

import './styles/global.css';

function App() {
  return (
    <TransactionProvaider>
      <Header />
      <Summary />
      <Transactions />
    </TransactionProvaider>
  );
}

export default App;

