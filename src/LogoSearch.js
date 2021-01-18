import "./LogoSearch.css";

import {
    FaHome
} from "react-icons/fa";

function LogoSearch() {
    return(
        <div className="logo_search_wrapper">
            <div className="logo_search_item">
                <div><FaHome className="home_icon"/></div><div className="lib_title">AZLE</div>
            </div>
            <div className="logo_search_item"></div>
            <div className="logo_search_item">
                stable
            </div>
            <div className="logo_search_item">
                <input className="search" placeholder="search docs..."></input>
            </div>
        </div>
    )
}

export default LogoSearch;