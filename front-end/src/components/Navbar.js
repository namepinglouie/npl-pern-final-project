import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h1 className="nav-title">OATMEAL</h1>
            <div className="nav-links">
            <Link to = "/"><button className="nav-button">HOME</button></Link>
            <Link to = "/oatmeals"><button className="nav-button">OATMEALS</button></Link>
            <Link to = "/oatmeals/new"><button className="nav-button">CREATE</button></Link>
            </div>
        </nav>
    )
}

export default Navbar;