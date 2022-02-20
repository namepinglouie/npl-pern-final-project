import axios from "axios";
import {React, useState} from "react";
import {useNavigate} from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ToggleFavorite from "./ToggleFavorite";

const API = process.env.REACT_APP_API_URL;

function OatmealNewForm() {
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

    let {name, calories, carb, fiber, sugar, fat, description, type, price, image} = oatmeal;

    const navigate = useNavigate();

    const handleText = (e) => setOatmeal({...oatmeal, [e.target.id]: e.target.value});

    const handleRating = (rate) => setOatmeal({...oatmeal, rating: rate});

    const handleHeartChange = () => {setOatmeal({...oatmeal, is_favorite: !oatmeal.is_favorite})};

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/oatmeals`, oatmeal)
             .then(res => navigate("/oatmeals"))
             .catch(error => console.log(error))
    };

    return (
        <div id="new-form">
            <form onSubmit={handleSubmit}>
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
                    <ReactStars count = {5} onChange = {handleRating} size = {50} activeColor = "#ffd700" />
                </div>

                <div className="new-input-parts">
                    <label htmlFor = "image">IMAGE</label>
                    <input id = "image" value = {image} type = "text" onChange = {handleText} />
                </div>

                <div className="center-btn"><button id="submit-btn" type = "submit">SUBMIT</button></div>
            </form>
        </div>
    )
}

export default OatmealNewForm;