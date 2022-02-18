import {Link} from "react-router-dom";

function Oatmeal({oatmeal}) {
    let {image, name, is_favorite, rating, price, id} = oatmeal;
    return (
        <article>
        <Link to = {`/oatmeals/${id}`}>
            <div className="oatmeal-card">
                <img src = {image} alt = {name} />
                <h3>{name}</h3>
                <h3>favorite: {is_favorite ? "True" : "False"}</h3>
                <h3>rating 0-5: {rating}</h3>
                <h3>price: {price}</h3>
            </div>
        </Link>
    </article>
    )
}

export default Oatmeal;