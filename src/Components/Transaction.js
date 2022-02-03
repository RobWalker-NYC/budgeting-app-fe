import { Link } from 'react-router-dom';

function Transaction ({ transaction, index }) {
    return (
        <tr className='Transaction'>
            <td>{transaction.date}</td>
            <td>
                <Link to={`/transactions/${index}`}>{transaction.from}</Link>
            </td>
            <td>{transaction.name}</td>
            <td>{transaction.amount}</td>
        </tr>
    )
}

export default Transaction;