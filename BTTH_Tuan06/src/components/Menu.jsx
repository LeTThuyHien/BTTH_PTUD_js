import React from 'react';
import { useState, useEffect } from 'react';
import { FaBookmark, FaStar } from "react-icons/fa";


import "./MenuItem.css";
function Menu() {
    const apiUrl = "https://67c7c544c19eb8753e7aac5f.mockapi.io/api/data";
    const [menuItem, setMenuItem] = useState([]);
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log("Dữ liệu từ API:", data); // Kiểm tra dữ liệu API
                setMenuItem(data);
            })
            .catch(error => console.error("Lỗi khi fetch dữ liệu:", error));
    }, []);
    return (
        <div className="info">
            <div className="info-content">
                <div className="content__info--filters">
                    <h1>Filters</h1>
                    <h2>Type</h2>
                    <div className="list--check">
                        <div className="filters--column1">
                            <div>
                                <input type="checkbox" name="type" id="type1" />
                                <label htmlFor="type1">Breakfast</label>
                            </div>
                            <div>
                                <input type="checkbox" name="type" id="type2" />
                                <label htmlFor="type2">Lunch</label>
                            </div>
                        </div>
                        <div className="filters--column2">
                            <div>
                                <input type="checkbox" name="type" id="type3" />
                                <label htmlFor="type3">Dinner</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content__info--times">
                    <h1>Times</h1>
                    <div className="time-slider">
                        <span>30 minutes</span>
                        <input type="range" min="0" max="100" defaultValue="30" />
                        <input type="range" min="0" max="100" defaultValue="50" />
                        <span>50 minutes</span>
                    </div>
                </div>
                <div className="content__info--rating">
                    <h1>Rating</h1>
                    {[5, 4, 3, 2, 1].map((stars, index) => (
                        <div className="rating-slider" key={index}>
                            <input type="checkbox" id={`rating${index}`} />
                            <label htmlFor={`rating${index}`}>
                                <span>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} color={i < stars ? "#FFD43B" : "#e7e4db"} />
                                    ))}
                                </span>
                            </label>
                        </div>
                    ))}


                </div>

                <div className="content__info--apply">
                    <button className="btn__apply">Apply</button>
                </div>

            </div>
            <div className='img-content'>
                <ul className='menu'>
                    {menuItem.map(item => (
                        <li key={item.id}>
                            <a href={apiUrl} className='img-item'>
                                <img src={item.imgUrl} alt={item.name} />
                            </a>
                            <div className='info-item'>
                                <h3>{item.name}</h3>
                                <div>
                                    <FaBookmark color="#FF69B4" />

                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

        </div>



    );
}

export default Menu;
