import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-detail">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <div className="description-image">
                    <p>
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <div className="hero-image-small">
                        <img
                            src="../src/assets/images/restauranfood.jpg"
                            alt="restaurant-food"
                            width="300"
                        />
                    </div>
                </div>
                <button>
                    <Link to="/booking">Reserve a table</Link>
                </button>
            </div>
            <div className="hero-image">
                <img
                    src="../src/assets/images/restauranfood.jpg"
                    alt="restaurant-food"
                    width="300"
                />
            </div>
        </section>
    );
}
