import { Link } from "react-router-dom";


function NavBar(props) {
    return (
        <nav>
            <Link to="/">
                Home
            </Link>
            <br />
            <Link to="sage">
                Sage Wisdom
            </Link>
            <br />
            <Link to="synmatch">
                SynMatch
            </Link>
            
        </nav>
    );
}

export default NavBar;