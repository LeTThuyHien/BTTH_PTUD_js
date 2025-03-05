import "./Menu.css";
function Menu() {
    const img = [
        {
            id: 1,
            url: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/chup-anh-mon-an-4_eqoy2h.jpg",
            alt: "menu1",
            name: "Italian-style tomatosalad"
        },
        {
            id: 2,
            url: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144552/travel-food-photography-tips_2412-01_mnetj9.jpg", // Add a default URL or remove this object if not needed//+
            alt: "menu2",
            name: "Italian-style tomatosalad"
        },
        {
            id: 3,
            url: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/chup-san-pham_uqb00m.jpg",
            alt: "menu3",
            name: "Italian-style tomatosalad"

        },
        {
            id: 4,
            url: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/bao-gia-chup-mon-an-dich-vu-chup-anh-do-an-chuyen-nghiep-5_pecp7q.jpg",
            alt: "menu4",
            name: "Italian-style tomatosalad"
        },
        {
            id: 5,
            url: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-1_o4wqyb.jpg",
            alt: "menu5",
            name: "Italian-style tomatosalad"
        },
        {
            id: 6,
            url: "https://res.cloudinary.com/dlbg2caig/image/upload/v1741144551/chup-anh-mon-an-com-ga-thuong-hai-8_uaip1t.jpg",
            alt: "menu6",
            name: "Italian-style tomatosalad"

        }

    ];
    return (
        <div >
            <div className="product">
                {img.map(item => (
                    <div key={item.id} className="product-item">
                        <div className="box-img">
                            <img className="img-product" src={item.url} alt={item.alt} />
                        </div>
                        <p className="product-name">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Menu;