import OatmealDetails from "../components/OatmealDetails.js";
import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function Show() {
    const [oatmeal, setOatmeal] = useState([]);
    const [readRating, setReadRating] = useState(0);
    const API = process.env.REACT_APP_API_URL;
    let {id} = useParams();

    useEffect(() => {
        axios.get(`${API}/oatmeals/${id}`)
             .then(res => {
                setOatmeal(res.data)
                setReadRating(res.data.rating)
             })
             .catch(error => console.log(error))
    }, [id]);

    const getStars = (ratingParam) => {
        console.log(readRating);
        console.log("ratingParam",typeof ratingParam)
        return (
            <ReactStars value = {ratingParam}
                        edit = {false}
                        size = {50}
            />
        )
    }

    return (
        <div className="show">
            <h1 className="sub-title">OATMEAL FLAVOR FACTS</h1>
            <div>
                {readRating && getStars(readRating)}
            </div>
            <OatmealDetails oatmeal = {oatmeal} readRating = {readRating} getStars = {getStars} />
        </div>
    )
}

export default Show;