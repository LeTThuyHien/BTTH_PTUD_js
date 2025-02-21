import React, { useState } from "react";
import food1 from "../assets/img/food1.jpg";
import food2 from "../assets/img/food2.jpg";
import food3 from "../assets/img/food3.jpeg";
import "./Tab.css";

const data = [
    {
        id: 1,
        img: food1
    },
    {
        id: 2,
        img: food2
    },
    {
        id: 3,
        img: food3
    }
];

const TabImg = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextImg = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    }

    return (
        <div className="tab">
            <h2>Discover Chefify</h2>
            <p>Easy and delicious cooking instructions right here. Start exploring now!</p>
            <div className="imgs">
                <img
                    src={data[activeIndex].img}
                    alt={`food-${data[activeIndex].id}`}
                    className="img"
                />
            </div>

            <div className="dots">
                {data.map((_, index) => (
                    <span
                        key={index}
                        className={index === activeIndex ? "dot active" : "dot"}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
            <div className="btn">
                <button className="btn-next active" onClick={nextImg}>Next</button>
                <button className="btn-skip" onClick={onclose}>Skip</button>
            </div>

        </div>





    );
};
export default TabImg;
