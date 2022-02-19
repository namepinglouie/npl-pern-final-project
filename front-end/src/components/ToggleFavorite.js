import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function ToggleFavorite({oatmeal, handleHeartChange}) {
    return (
        <div className="toggle-favorite">
            {oatmeal.is_favorite ? (<img className = "heart" src = {heartSolid} alt = "favorite" onClick = {() => handleHeartChange()} />)
                                 : (<img className = "heart" src = {heartOutline} alt = "not favorite" onClick = {() => handleHeartChange()} />)
            }
        </div>
    )
}

export default ToggleFavorite;