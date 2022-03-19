import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs, updateDoc} from "firebase/firestore";
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

      return (
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
      );
}


export function useTransactions() {
    const contex = useContext(TransactionContext);
    
    return contex;
  }
