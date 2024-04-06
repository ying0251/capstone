import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <div className="header">
            <div className="menu">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="header-logo">
                <img src="../src/assets/images/Logo.png" alt="logo" size="lg" />
            </div>
            <Nav />
            <div className="cart">
                <FontAwesomeIcon icon={faCartPlus} size="lg" />
            </div>
        </div>
    );
}

export default Header;
