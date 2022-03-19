import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc} from "firebase/firestore";
import {db} from "../firebase/config"

const TransactionContext = createContext({});

export function TransactionProvaider({children}){
    const usersTransactions = collection(db, "transacoes");
    const [transactions, setTransactions] = useState([]);

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


      return (
        <TransactionContext.Provider value={{transactions, deleteUser}}>
            {children}
        </TransactionContext.Provider>
      );
}


export function useTransactions() {
    const contex = useContext(TransactionContext);

    return contex;
  }
