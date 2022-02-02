import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <h1>
                    <Link style={{'margin':'75px'}}to="/transactions">Budget App</Link>
                    
                    <Link style={{'margin':'75px'}}to="/transactions/new"><button style={{'padding':'5px'}}>New Transaction</button></Link>
                </h1>
            </nav>
        </div>
    );
}

export default Navbar;