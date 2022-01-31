import { useState,  useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function TransactionDetails() {
    const [transaction, setTransaction] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();

useEffect(() => {
    axios
      .get(`${API_URL}/transaction/${index}`)
      .then((res) => {
          setTransaction(res.data)
  })  .catch((error) => {
          navigate('/not-found')
 })
}, [])   

const handleDelete = () => {
    axios
      .delete(`${API_URL}/transactions/${index}`)
      .then(() => {
          navigate('/transactions');
 })   .catch((error) => {
        console.log(error);
  });
};



return (
 <div>
   <div>
       <div>Date {transactions.date}</div>
       <div>Name {transactions.name}</div>
       <div>From {transactions.from}</div>
       <div>Amount {transactions.amount}</div>
   </div> 
       <div>
           <Link to={'/transactions'}>
            <button>Back</button>
           </Link>
       </div>
       <div>
           <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
           </Link>
       </div>
       <div>
           <button onClick={handleDelete}>Delete</button>
       </div>
 </div>
)
}

export default TransactionDetails;