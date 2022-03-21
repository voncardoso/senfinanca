import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase/config"

const TransactionContext = createContext({});

export function TransactionProvaider({children}){
    const usersTransactions = collection(db, "transacoes");
    const [transactions, setTransactions] = useState([]);
    const [typetransactions, setTypetransactions] = useState('');
    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState('');
    const [categoria, setCategoria] = useState('');
    const [filter, setFilter] = useState('');
    const [id ,setId] = useState('');
    let filter1 = '';

    useEffect(() => {
        const getTransactions = async () => {
          const data = await getDocs(usersTransactions);
          setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getTransactions();
      }, []);

      // função para detelar
      const deleteUser = async (id) => {
        const userDoc = doc(db, "transacoes", id);
        await deleteDoc(userDoc);
        alert('Usuário deletado com sucesso');
       // handleCloseNewDeleteUserModal();
       window.location.reload();
    };

    // função para editar
    async function upadteTransactions(event){
      event.preventDefault();
      const userDoc = doc(db, "transacoes", id);
      const tituloUpdate = {titulo};
      const valorUpdate = {valor};
      const categoriaUpdate = {categoria};
      const typetransactionsUpdate = {typetransactions};

      if(titulo != ''){
        await updateDoc(userDoc, tituloUpdate);
      }

      if(valor != ''){
        await updateDoc(userDoc, valorUpdate);
      }

      if(categoria != ''){
        await updateDoc(userDoc, categoriaUpdate);
      }
      if(typetransactions != ''){
        await updateDoc(userDoc, typetransactionsUpdate);
      }


      alert('usuario Atualizado com sucesso');

      window.location.reload();
      //handleOpenNewUpdateUserSucessModal();
  }

  // função de filtros 
  function inputeFilter(){
    
    transactions.map((transaction)=>{
      
      let total = transaction.categoria.indexOf(filter)
      console.log('filter1', total )
      if(total >= 0){
        console.log('passou')
        filter1 = transaction.categoria
      }
    })
    console.log('filter1', filter1)
  }

  inputeFilter();
  const filterentradas = transactions.filter((transaction) =>{
    console.log(transaction);
    return transaction.typetransactions == filter || transaction.categoria == filter;
  });

  console.log('filters',filterentradas);



      return (
        <TransactionContext.Provider value={{
          transactions, 
          deleteUser, 
          upadteTransactions,
          setTypetransactions,
          setTitulo,
          setValor,
          setCategoria,
          titulo, 
          valor,
          categoria,
          id ,
          setId,
          filter, 
          setFilter,
          filterentradas,
          inputeFilter,
          filter1
          }}>
            {children}
        </TransactionContext.Provider>
      );
}


export function useTransactions() {
    const contex = useContext(TransactionContext);

    return contex;
  }
