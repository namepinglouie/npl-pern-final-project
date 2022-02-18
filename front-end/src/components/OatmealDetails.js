import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function OatmealDetails() {
    const [oatmeal, setOatmeal] = useState([]);
    let navigate = useNavigate();
    let {id} = useParams();
    let {name, calories, carb, fiber, sugar, fat, is_favorite, description, type, price, rating, featured, image} = oatmeal;

    useEffect(() => {
        axios.get(`${API}/oatmeals/${id}`)
             .then(res => setOatmeal(res.data))
             .catch(error => console.log(error))
    }, [id]);

    const handleDelete = () => {
        axios.delete(`${API}/oatmeals/${id}`)
             .then(res => navigate("/oatmeals"))
             .catch(error => console.log(error))
    };

    return (
        <div className="oatmeal-details">
            <h2>{name}</h2>
            <img src = {image} alt = {name} />
            <h4>calories: {calories}</h4>
            <h5>carb: {carb}</h5>
            <h5>fiber: {fiber}</h5>
            <h5>sugar: {sugar}</h5>
            <h5>fat: {fat}</h5>
            <h5>favorite: {is_favorite ? "True" : "False"}</h5>
            <h5>description: {description}</h5>
            <h5>type: {type}</h5>
            <h5>price: {price}</h5>
            <h5>rating: {rating}</h5>
            <h5>featured: {featured ? "True" : "False"}</h5>
            <div>
                <Link to = {"/oatmeals"}>Back</Link>
                <Link to = {`/oatmeals/${id}/edit`}>Edit</Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default OatmealDetails;