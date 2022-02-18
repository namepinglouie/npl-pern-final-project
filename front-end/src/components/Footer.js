import {Link} from "react-router-dom";

function Footer() {
    return (
        <nav>
            <Link to = "/oatmeals"><h1>Show All Oatmeals</h1></Link>
            <Link to = "/oatmeals/new"><h1>New Oatmeal</h1></Link>
        </nav>
    )
}

export default Footer;