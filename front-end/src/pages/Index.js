import Oatmeals from "../components/Oatmeals.js";

function Index() {
    return (
        <div className="index">
            <h1 className="sub-title">Oatmeals</h1>
            {/* <div className="filter-content">
                <h1 className="sub-sub-title">FILTER</h1>
            </div> */}
            <div className="display-oatmeals"><Oatmeals /></div>
        </div>
    )
}

export default Index;