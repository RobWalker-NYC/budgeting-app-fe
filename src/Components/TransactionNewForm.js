import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const APP_API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
    const { index } = useParams();
    const navigate = useNavigate();

    const [transactions, setTransactions] = useState({
        date: '',
        name: '',
        amount: 0,
        from: ''
    });

    const handleTextChange = (event) => {
        setTransactions({ ...transactions, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
           .post(`${API_URL}/transactions`, transaction)
           .then((res) => {
               navigate('/transactions');
       })  .catch((error) => {
              consol.log(error);
      })
    }

return (
    <div>
        <div>
            <form>
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
  )
}

export default TransactionNewForm;