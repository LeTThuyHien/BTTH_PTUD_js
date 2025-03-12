import React from 'react';
import { useState, useEffect } from 'react';
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
        <div className='container'>
            <ul className='menu'>
                {menuItem.map(item => (
                    <li key={item.id}>
                        <a href={apiUrl} className='img-item'>
                            <img src={item.imgUrl} alt={item.name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default Menu;
