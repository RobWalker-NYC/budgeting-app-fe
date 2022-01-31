import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div>
            <nav>
                <h1><Link to = '/'>Budget App</Link></h1>
                <button><link to = '/transactions/new'>New Transaction</link></button>
            </nav>
        </div>
    )
}

export default Navbar;