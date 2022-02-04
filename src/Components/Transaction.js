import { Link } from 'react-router-dom';

function Transaction ({ transaction, index }) {

    return (
            <tr className='transaction'>
                <td>{transaction.date}<hr class='hr'/></td>&nbsp;
            
                <td>
                    <Link id='hr'to={`/transactions/${index}`}>{transaction.name}</Link>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <hr class='hr'/>
                    </td>
                    <td>{transaction.source}<hr class='hr'/></td>
                    <td>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;$ {transaction.amount}<hr class='hr'/></td>
            </tr>
            
        
    )
}

export default Transaction;