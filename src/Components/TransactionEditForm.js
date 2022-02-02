import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
    const { index } = useParams();
    const navigate = useNavigate();

    const [transactions, setTransactions] = useState({
        date: '',
        name: '',
        amount: 0,
        from: ''
    })

    const handleTextChange = (event) => {
        setTransactions({ ...transactions, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        axios
          .get(`${API_URL}/transaction/${index}`)
          .then((res) => {
              setTransactions(res.data);
        }).catch((error) => {
            throw error
  })
}, [index]);

   const handleSubmit = (event) => {
      event.preventDefault()
      axios
        .put(`${API_URL}/transaction/${index}`, transactions)
        .then((res) => {
            navigate(`/transaction`)
      }).catch((error) => {
            console.log(error);
    })
   };

   return(
       <div>
         <div>
             <form onSubmit={handleSubmit}>
                 <div>
                     <lable htmlFor='date'>Date</lable>
                     <input 
                         id ='date'
                         value = {transactions.date}
                         type = 'date'
                         onChange = {handleTextChange}
                         placeholder = 'Date of transaction'
                         required
                         />
                 </div>
                 <div>
                     <lable htmlFor='ItemName'>Item Name</lable>
                     <input
                         id ='name'
                         value = {transactions.name}
                         type = 'text'
                         onChange = {handleTextChange}
                         placeholder = 'Name of item'
                         required
                         />
                 </div>
                 <div>
                    <lable htmlFor='amount'>Amount</lable>
                    <input
                        id ='amount'
                        value = {transactions.amount}
                        type = 'number'
                        onChange = {handleTextChange}
                        placeholder = 'Amount'
                        required
                        /> 
                </div>
                <div>
                     <lable htmlFor='from'>From</lable>
                     <input 
                         id ='from'
                         value = {transactions.from}
                         type = 'text'
                         onChange = {handleTextChange}
                         placeholder = 'From'
                         required
                         />
                </div>
                <div>
                    <input type = 'submit' value = 'Create' />
                </div>
             </form>
                <Link to = {`/transactions/${index}`}>
                    <button type = 'submit'>Back</button>
                </Link>
            </div>
       </div>
   );
}

export default TransactionEditForm;