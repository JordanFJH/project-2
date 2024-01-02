import { Link } from "react-router-dom";


function NavBar(props) {
    return (
        <div className="nav">
            <Link to="/">
                Home
            </Link>
            <br />
            <Link to="sage">
                Sage Wisdom
            </Link>
            
        </div>
    );
}

export default NavBar;