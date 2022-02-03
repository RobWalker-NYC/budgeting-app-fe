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
        from: '',
    });

    const handleTextChange = (event) => {
        setTransactions({ ...transactions, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        axios
          .get(`${API_URL}/transactions/${index}`)
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
        <div style={{'margin-left':'25px'}} >
        <form onSubmit={handleSubmit}>
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
            <div>
                <lable htmlFor='from'><strong>From</strong></lable><br />
                <input style={{'padding':'5px'}}
                    id ='from'
                    value = {transactions.from}
                    type = 'text'
                    onChange = {handleTextChange}
                    placeholder = 'from'
                    required
                    />
            </div>
            <br/>
            <div>
                <input style={{'padding':'5px'}} type = 'submit' value = 'Submit Item' />
            </div> 
            <br/>  
        </form>
            <Link to = {`/transactions/${index}`}>
                <button style={{'padding':'5px'}} type = 'submit'>Back</button>
            </Link>
      </div>
    </div>
   );
}

export default TransactionEditForm;