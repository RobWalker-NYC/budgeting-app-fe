import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <h1>
                    <Link to="/transactions">Budget App</Link>
                </h1>
                <button>
                    <Link to="/transactions/new">New Transaction</Link>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;