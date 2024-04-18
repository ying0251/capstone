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
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Menu</a>
                            </li>
                            <li>
                                <a href="">Reservations</a>
                            </li>
                            <li>
                                <a href="">Order Online</a>
                            </li>
                            <li>
                                <a href="">Login</a>
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
