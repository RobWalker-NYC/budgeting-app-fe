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
      .get(`${API_URL}/transactions/${index}`)
      .then((res) => {
          setTransaction(res.data)
    }).catch((error) => {
          throw error
 });
}, [index]);   

const handleDelete = () => {
    axios
      .delete(`${API_URL}/transactions/${index}`)
      .then((res) => {
          navigate('/transactions');
    }).catch((error) => {
        console.log(error);
  })
};

return (
 <div>
   <div>
       <div>Date: {transaction.date}</div><br/>
       <div>Name: {transaction.name}</div><br/>
       <div>From: {transaction.from}</div><br/>
       <div>Amount: {transaction.amount}</div><br/>
   </div> 
       <div>
           <Link to={'/transactions'}>
            <button>Back</button>
           </Link>
       </div>
       <br/>
       <div>
           <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
           </Link>
       </div>
       <br/>
       <div>
           <button onClick={handleDelete}>Delete</button>
       </div>
 </div>
);
}

export default TransactionDetails;