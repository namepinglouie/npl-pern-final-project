import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import ToggleFavorite from "./ToggleFavorite";

function OatmealDetails({oatmeal, readRating, getStars}) {
    const API = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();
    let {id} = useParams();
    let {name, calories, carb, fiber, sugar, fat, description, type, price, image} = oatmeal;

    // const readRating = {
    //     size: 50,
    //     edit: false,
    //     value: rating,
    // };

    const handleDelete = () => {
        axios.delete(`${API}/oatmeals/${id}`)
             .then(res => navigate("/oatmeals"))
             .catch(error => console.log(error))
    };

    return (
        <div>
            <div className="oatmeal-details">
                <div className="oatmeal-heading">
                    <h2 className="oatmeal-name">{name}</h2>
                    <span><ToggleFavorite oatmeal = {oatmeal} /></span>
                </div>
                {readRating && getStars(readRating)}
                <h3>$ {price}</h3>
                <img src = {image} alt = {name} />
                <div className="details-nutrition">
                    <h5>CALORIES: {calories}</h5>
                    <h5>CARB: {carb} g</h5>
                    <h5>FIBER: {fiber} g</h5>
                    <h5>SUGAR: {sugar} g</h5>
                    <h5>FAT: {fat} g</h5>
                </div>
                <h5>OATMEAL TYPE: {type}</h5>
                <h5>DESCRIPTION: {description}</h5>
            </div>
            <div className="oatmeal-details-navigation">
                <Link to = {"/oatmeals"}><button>BACK</button></Link>
                <Link to = {`/oatmeals/${id}/edit`}><button>EDIT</button></Link>
                <button onClick={handleDelete}>DELETE</button>
            </div>
    </div>
    )
}

export default OatmealDetails;