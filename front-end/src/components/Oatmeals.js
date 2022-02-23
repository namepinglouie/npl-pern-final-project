import axios from "axios";
import {useState, useEffect} from "react";
import Oatmeal from "./Oatmeal.js";

function Oatmeals() {
    const [oatmeals, setOatmeals] = useState([]);
    const [filterFav, setFilterFav] = useState(false);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/oatmeals`)
             .then(res => setOatmeals(res.data))
             .catch(error => console.log(error))
    }, [API]);

    let displayOatmeals = oatmeals.map((oatmeal, index) => {
        return <Oatmeal key = {index} oatmeal = {oatmeal} />
    });

    const handleFilterFav = () => {
        setFilterFav(!filterFav);
    };

    let filter_favorite = oatmeals.filter(oatmeal => oatmeal.is_favorite)
                                  .map((oatmeal, index) => {
                                    return <Oatmeal key = {index} oatmeal = {oatmeal} />
                                  })

    return (
        <div>
            <div className="filter-content">
                <h1 className="sub-sub-title">FILTER</h1>
                <div className="filter-div">
                    <div className="filter-div-fav">
                        <label htmlFor="filter-fav">FAVORITE</label>
                        <input id = "filter-fav" type = "checkbox" onChange = {handleFilterFav} />
                    </div>
                </div>
            </div>
            <div className="oatmeals">
                {filterFav ? filter_favorite : displayOatmeals}
            </div>
        </div>
    )
}

export default Oatmeals;