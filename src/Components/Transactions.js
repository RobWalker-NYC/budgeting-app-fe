import { useState, useEffect } from 'react';
import Transaction from './Transaction.js';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
    const [transaction, setTransaction] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/transactions`)
             .then((res) =>{
                 setTransactions(res.data);
           }).catch((error) => {
               throw error;
           })
    }, [])

    let totalArr  = (transactionsArr) => { 
        transactionsArr.maps((transaction, index) => {
         return transaction.amount;
    }

 }

 export default Transactions;
