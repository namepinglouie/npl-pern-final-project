import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Home() {
    const [oatmeals, setOatmeals] = useState([]);
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/oatmeals`)
             .then(res => setOatmeals(res.data))
             .catch(error => console.log(error))
    }, [API]);

    let displayFeatured = oatmeals.filter((oatmeal) => oatmeal.featured)
                                  .map(oatmeal => {
                                    return (
                                        <div key = {oatmeal.id} className="featured-card">
                                            <Link to = {`/oatmeals/${oatmeal.id}`}>
                                                <img src = {oatmeal.image} className = "slide-img" alt = {oatmeal.name} />
                                            </Link>
                                            <p>{oatmeal.name}</p>
                                        </div>
                                    )
                                  });

    return (
        <div className="home">
            <h1 className="sub-title">FEATURED OATMEALS</h1>
            <div className = "content-feature">
                <AliceCarousel autoPlay animationType = "slide" disableButtonsControls infinite autoPlayInterval = "2750">
                {displayFeatured}
                </AliceCarousel>
            </div>
        </div>
    )
}

export default Home;