import axios from "axios";
import {useState, useEffect} from "react";
import Oatmeal from "./Oatmeal.js";

function Oatmeals() {
    const [oatmeals, setOatmeals] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/oatmeals`)
             .then(res => setOatmeals(res.data))
             .catch(error => console.log(error))
    }, [API]);

    let displayOatmeals = oatmeals.map((oatmeal, index) => {
        return <Oatmeal key = {index} oatmeal = {oatmeal} />
    });

    return (
        <div className="oatmeals">
            {displayOatmeals}
        </div>
    )
}

export default Oatmeals;