import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

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

    let {name, calories, carb, fiber, sugar, fat, is_favorite, description, type, price, rating, image} = oatmeal;

    const navigate = useNavigate();

    const handleText = (e) => setOatmeal({...oatmeal, [e.target.id]: e.target.value});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/oatmeals`, oatmeal)
             .then(res => navigate("/oatmeals"))
             .catch(error => console.log(error))
    };

    return (
        <div id="new-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor = "name">NAME</label>
                <input id = "name" value = {name} type = "text" onChange = {handleText} />

                <label htmlFor = "calories">CALORIES</label>
                <input id = "calories" value = {calories} type = "number" onChange = {handleText} />

                <label htmlFor = "carb">CARB</label>
                <input id = "carb" value = {carb} type = "number" onChange = {handleText} />

                <label htmlFor = "fiber">FIBER</label>
                <input id = "fiber" value = {fiber} type = "number" onChange = {handleText} />

                <label htmlFor = "sugar">SUGAR</label>
                <input id = "sugar" value = {sugar} type = "number" onChange = {handleText} />

                <label htmlFor = "fat">FAT</label>
                <input id = "fat" value = {fat} type = "number" onChange = {handleText} />

                <label htmlFor = "is_favorite">FAVORITE</label>
                <input id = "is_favorite" value = {is_favorite} type = "text" onChange = {handleText} placeholder = "switching hearts" />

                <label htmlFor = "description">DESCRIPTION</label>
                <textarea id = "description" value = {description} onChange = {handleText}></textarea>

                <label htmlFor = "type">OATMEAL TYPE</label>
                <datalist id = "type" value = {type}>
                    <option value = "Sweetened Hot Oatmeal" />
                    <option value = "Savory Hot Oatmeal" />
                    <option value = "Unflavored Hot Oatmeal" />
                    <option value = "Overnight Oats" />
                </datalist>
                <input list = "type" id = "type"  name = "type" onChange = {handleText} placeholder = "custom oatmeal type" />

                <label htmlFor = "price">PRICE</label>
                <input id = "price" value = {price} type = "number" onChange = {handleText} />

                <label htmlFor = "rating">RATING</label>
                <input id = "rating" value = {rating} type = "number" onChange = {handleText} placeholder = "0 - 5" />

                <label htmlFor = "image">IMAGE</label>
                <input id = "image" value = {image} type = "text" onChange = {handleText} />

                <button type = "submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default OatmealNewForm;