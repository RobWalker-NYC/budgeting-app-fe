import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
    const { index } = useParams();
    const navigate = useNavigate();

    const [transactions, setTransactions] = useState({
        date: '',
        name: '',
        amount: 0,
        from: '',
    });

    const handleTextChange = (event) => {
        setTransactions({ ...transactions, [event.target.id]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
           .post(`${API_URL}/transactions`, transactions)
           .then((res) => {
               navigate('/transactions');
         }).catch((error) => {
              console.log(error);
      })
    };

return (
    <div>
        <div class='tranNew'>
            <h1 style={{'margin-left':'25px'}}><strong>Add a new item</strong></h1>
        </div>
        <div style={{'margin-left':'25px'}} >
            <form class='newVals' onSubmit={handleSubmit}>
            <br/>
                <div>
                     <lable htmlFor='date'><strong>Date</strong></lable><br />
                     <input style={{'padding':'5px'}}
                         id ='date'
                         value = {transactions.date}
                         type = 'date'
                         onChange = {handleTextChange}
                         placeholder = 'date'
                         required
                         />
                 </div>
                 <br/>
                 <div>
                     <lable htmlFor='ItemName'><strong>Name</strong></lable><br />
                     <input style={{'padding':'5px'}}
                         id ='name'
                         value = {transactions.name}
                         type = 'text'
                         onChange = {handleTextChange}
                         placeholder = 'name'
                         required
                         />
                 </div>
                 <br/>
                 <div>
                    <lable htmlFor='source'><strong>Source</strong></lable><br />
                    <input style={{'padding':'5px'}}
                         id ='source'
                         value = {transactions.source}
                         type = 'text'
                         onChange = {handleTextChange}
                         placeholder = 'source'
                         required
                         />
                </div>
                <br/>
                <div>
                <lable htmlFor='amount'><strong>Amount</strong></lable><br />
                    <input style={{'padding':'5px'}}
                        id ='amount'
                        value = {transactions.amount}
                        type = 'number'
                        onChange = {handleTextChange}
                        placeholder = 'amount'
                        required
                        /> 
                </div>
                <br/>
            
                  <div class='tranNewBtns'>
                    <div>
                        <input style={{'padding':'5px'}} type = 'submit' value = 'CREATE NEW ITEM' />
                    </div> 
                    <br/>  
                    <Link to = {`/transactions/${index}`}>
                        <button style={{'padding':'5px'}} type = 'submit'>Back</button>
                    </Link>
                  </div>  
                  </form>
        </div>
    </div>
  )
}

export default TransactionNewForm;