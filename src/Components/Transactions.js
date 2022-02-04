import { useState, useEffect } from 'react';
import Transaction from './Transaction';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
             .get(`${API_URL}/transactions`)
             .then((res) =>{
                 setTransactions(res.data);
           }).catch((error) => {
               throw error;
         });
    }, []);

    const total  = transactions
            .map((transaction) => {return transaction.amount;})
            .reduce(function (a, b) { return a + Number(b); }, 0);  

   function colorCode (amount) {
       if (amount >= 1000) {
          return  <h2 style={{'color':'green'}}>Bank Account Total: ${ amount.toFixed(2)}</h2>
       } else if (amount < 1000 && amount > 0) {
              return <h2 style={{'color':'gray'}}>Bank Account Total: ${amount.toFixed(2)}</h2>
       } else {
            return <h2 style={{'color':'red'}}>Bank Account Total: ${amount.toFixed(2)}</h2>
       }
   };

    return (  
        <div>  
           <div class='tranS'>
            <h2>
             {colorCode(total)}    
            </h2> 
          <section>
           <table>
             <thead>
               <tr>
                  <th>Date</th>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                  
                  <th id='tranNewName'>Name</th>
                  <th>Source</th>
                  <th>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</th>
               </tr>
             </thead>
             <tbody>
                {transactions.map((transaction, index) => {
                    return ( <Transaction key={index} transaction={transaction} index={index} />);
                })}
             </tbody>
           </table> 
          </section>
         </div> 
        </div>
    );
}
 export default Transactions;
