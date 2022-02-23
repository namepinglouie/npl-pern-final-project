import {useState, useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios"; 
import ToggleFavorite from "./ToggleFavorite";
import ReactStars from "react-rating-stars-component";

const API = process.env.REACT_APP_API_URL;

function OatmealEditForm() {
    let {id} = useParams();
    const [oatmeal, setOatmeal] = useState({
        name: "",
        calories: 0,
        carb: 0,
        fiber: 0,
        sugar: 0,
        fat: 0,
        is_favorite: false,
        description: "",
        type: "",
        price: 0,
        rating: 0,
        featured: false,
        image: ""
    });

    let {name, calories, carb, fiber, sugar, fat, description, type, price, rating, image} = oatmeal;

    const navigate = useNavigate();

    const handleText = (e) => setOatmeal({...oatmeal, [e.target.id]: e.target.value});

    const handleRating = (rate) => setOatmeal({...oatmeal, rating: rate});

    const handleHeartChange = () => {setOatmeal({...oatmeal, is_favorite: !oatmeal.is_favorite})};

    useEffect(() => {
        axios.get(`${API}/oatmeals/${id}`)
             .then(res => setOatmeal(res.data))
             .catch(error => console.log(error))
    }, [id]);

    const handleEdit = (e) => {
        e.preventDefault();
        axios.put(`${API}/oatmeals/${id}`, oatmeal)
             .then(res => navigate("/oatmeals"))
             .catch(error => console.log(error))
    };

    const getStars = () => {
        return (
            <ReactStars value = {rating}
                        size = {50}
                        onChange = {handleRating}
            />
        )
    };

    return (
        <div id="edit-form">
            <form onSubmit={handleEdit}>
                <div className="new-input-parts">
                    <label htmlFor = "name">NAME</label>
                    <input id = "name" value = {name} type = "text" onChange = {handleText} />
                </div>

                <div className="new-input-parts-numbers">
                    <div className="new-input-parts">
                        <label htmlFor = "calories">CALORIES</label>
                        <input id = "calories" value = {calories} type = "number" onChange = {handleText} />
                    </div>

                    <div className="new-input-parts">
                        <label htmlFor = "carb">CARB(g)</label>
                        <input id = "carb" value = {carb} type = "number" onChange = {handleText} />
                    </div>

                    <div className="new-input-parts">
                        <label htmlFor = "fiber">FIBER(g)</label>
                        <input id = "fiber" value = {fiber} type = "number" onChange = {handleText} />
                    </div>

                    <div className="new-input-parts">
                        <label htmlFor = "sugar">SUGAR(g)</label>
                        <input id = "sugar" value = {sugar} type = "number" onChange = {handleText} />
                    </div>

                    <div className="new-input-parts">
                        <label htmlFor = "fat">FAT(g)</label>
                        <input id = "fat" value = {fat} type = "number" onChange = {handleText} />
                    </div>

                    <div className="new-input-parts">
                        <label htmlFor = "is_favorite">FAVORITE</label>
                        <ToggleFavorite oatmeal = {oatmeal} handleHeartChange = {handleHeartChange} />
                    </div>
                </div>

                <div className="new-input-parts description">
                    <label htmlFor = "description">DESCRIPTION</label>
                    <textarea id = "description" value = {description} onChange = {handleText}></textarea>
                </div>

                <div className="new-input-parts-type-price">
                    <div className="new-input-parts">
                        <label htmlFor = "type">OATMEAL TYPE</label>
                        <datalist id = "type" value = {type}>
                            <option value = "Sweetened Hot Oatmeal" />
                            <option value = "Savory Hot Oatmeal" />
                            <option value = "Unflavored Hot Oatmeal" />
                            <option value = "Overnight Oats" />
                        </datalist>
                        <input list = "type" id = "type"  name = "type" onChange = {handleText} placeholder = "custom oatmeal type" />
                    </div>

                    <div className="new-input-parts">
                        <label htmlFor = "price">PRICE</label>
                        <input id = "price" value = {price} type = "number" onChange = {handleText} />
                    </div>
                </div>

                <div className="new-input-parts-rating">
                    <label htmlFor = "rating">RATING</label>
                    {rating && getStars()}
                </div>

                <div className="new-input-parts">
                    <label htmlFor = "image">IMAGE</label>
                    <input id = "image" value = {image} type = "text" onChange = {handleText} />
                </div>

                <div className="oatmeal-details-navigation">
                    <Link to = {`/oatmeals/${id}`}><button>BACK</button></Link>
                    <button type = "submit">UPDATE</button>
                </div>
            </form>
        </div>
    )
}

export default OatmealEditForm;