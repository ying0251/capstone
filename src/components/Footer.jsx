import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src="../src/assets/images/footer-logo.png" alt="logo" />
            </div>
            <div className="footer-information">
                <div>
                    <h4>Dormat Navigation</h4>
                    <div className="informations">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li>
                                <Link to="/booking">Reservations</Link>
                            </li>
                            <li>
                                <Link to="order-online">Order Online</Link>
                            </li>
                            <li>
                                <Link to="login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Contact</h4>
                    <div className="informations">
                        <ul>
                            <li>Address</li>
                            <li>phone number</li>
                            <li>email</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4>Social Media Links</h4>
                    <div className="informations">
                        <ul>
                            <li>
                                <a href="">Twitter</a>
                            </li>
                            <li>
                                <a href="">Facebook</a>
                            </li>
                            <li>
                                <a href="">YouTube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
