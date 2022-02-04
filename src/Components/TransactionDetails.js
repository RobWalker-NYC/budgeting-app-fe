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

function  handleDelete() {
    axios
      .delete(`${API_URL}/transactions/${index}`)
      .then((res) => {
          navigate('/transactions');
    }).catch((error) => {
        console.log(error);
  });
};

return (
 <div>
   <div class='tranDetail'>
       <div>Date: {transaction.date}</div><br/>
       <div>Name: {transaction.name}</div><br/>
       <div>Source: {transaction.source}</div><br/>
       <div>Amount:&nbsp;&nbsp;{(transaction.amount)}</div><br/>
   </div> 
       <div class='detailBtns'>
           <Link to={'/transactions'}>
            <button id='dtBn1'>Back</button>
           </Link>
           <Link to={`/transactions/${index}/edit`}>
            <button id='dtBn2'>Edit</button>
           </Link>
           <button id='dtBn3'onClick={handleDelete}>Delete</button>
       </div>
</div>
);
}

export default TransactionDetails;