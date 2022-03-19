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
    const [id ,setId] = useState('');

    useEffect(() => {
        const getTransactions = async () => {
          const data = await getDocs(usersTransactions);
          setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getTransactions();
      }, []);

      const deleteUser = async (id) => {
        const userDoc = doc(db, "transacoes", id);
        await deleteDoc(userDoc);
        alert('Usuário deletado com sucesso');
       // handleCloseNewDeleteUserModal();
       window.location.reload();
    };

    async function upadteTransactions(event){
      event.preventDefault();
      const userDoc = doc(db, "transacoes", id);
      const tituloUpdate = {titulo};
      const valorUpdate = {valor};
      const categoriaUpdate = {categoria};


      if(titulo != ''){
        await updateDoc(userDoc, tituloUpdate);
      }

      if(valor != ''){
        await updateDoc(userDoc, valorUpdate);
      }

      if(categoria != ''){
        await updateDoc(userDoc, categoriaUpdate);
      }


      alert('usuario Atualizado com sucesso');

      window.location.reload();
      //handleOpenNewUpdateUserSucessModal();
  }



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
          setId
          }}>
            {children}
        </TransactionContext.Provider>
      );
}


export function useTransactions() {
    const contex = useContext(TransactionContext);

    return contex;
  }
