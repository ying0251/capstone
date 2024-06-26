import { useState } from "react";
import Card from "./Card";
import MenuButton from "./MenuButton";

const menus = [
    {
        name: "Greek salad",
        price: "12.99",
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
        name: "Bruchetta",
        price: "5.99",
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
        name: "Lemon dessert",
        price: "5.00",
        description:
            "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
    {
        name: "Grilled fish",
        price: "20.00",
        description:
            "Caught from pristine waters and lovingly cooked over an open flame, delivering a delightful harmony of tender flesh and aromatic herbs.",
    },
    {
        name: "Pasta",
        price: "18.99",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    },
];

const menuNames = {
    All: ["Greek salad", "Bruchetta", "Lemon dessert", "Grilled fish", "Pasta"],
    Lunch: ["Greek salad", "Grilled fish", "Pasta"],
    Mains: ["Grilled fish", "Pasta"],
    Desserts: ["Lemon dessert"],
    "A La Carte": ["Greek salad", "Bruchetta", "Grilled fish", "Pasta"],
    Specials: ["Greek salad", "Bruchetta", "Lemon dessert"],
};

function Highlights() {
    const [filter, setFilter] = useState("All");
    function handleClick(e) {
        console.log(e.target.value);
    }
    return (
        <section className="highlights">
            <div className="highlights-banner">
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className="highlights-banner-sm">
                <h5>ORDER FOR DELIVERY</h5>
                <div className="highlights-menu-container">
                    <div className="highlights-menu">
                        {Object.keys(menuNames).map((menuName, index) => (
                            <MenuButton
                                key={index}
                                menuName={menuName}
                                handleClick={handleClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="cards">
                {menus.map((special, index) => (
                    <Card
                        key={index}
                        name={special.name}
                        price={special.price}
                        description={special.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Highlights;
