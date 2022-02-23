import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ToggleFavorite from "./ToggleFavorite";

function Oatmeal({oatmeal}) {
    let {image, name, rating, price, id} = oatmeal;

    const readRating = {
        size: 25,
        value: rating,
        edit: false
    }

    return (
        <article>
            <Link to = {`/oatmeals/${id}`}>
            <div className="oatmeal-card">
                <img className="oatmeal-img" src = {image} alt = {name} />
                <p>{name}</p>
                <ToggleFavorite oatmeal = {oatmeal} />
                <span className="center-rating"><ReactStars {...readRating} /></span>
                <p>$ {price}</p>
            </div>
            </Link>
        </article>
    )
}

export default Oatmeal;