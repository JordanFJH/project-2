import { Link } from "react-router-dom";


function NavBar(props) {
    return (
        <nav>
            <Link to="/">
                <h3>Home</h3>
            </Link>
            <br />
            <Link to="sage">
                <h3>Sage Wisdom</h3>
            </Link>
            <br />
            <Link to="synmatch">
                <h3>Syn Match</h3>
            </Link>

        </nav>
    );
}

export default NavBar;