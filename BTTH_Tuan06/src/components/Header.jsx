import "./Header.css";

function Header() {

    return (
        <header className="header">
            <div className="header__logo">
                <img src="https://res.cloudinary.com/dlbg2caig/image/upload/v1741147905/logo_zonaoa.png" alt="Logo" />
            </div>
            <div className="header__menu">

                <div className="header__menu--search">
                    <input className="input--search" type="text" placeholder="Search recipes..." />
                </div>


                <div className="header__menu--list">
                    <ul>
                        <li><a href="#">What to cook</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Ingredient</a></li>
                        <li><a href="#">Occasions</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="header__avt">
                <button className="header__avt--btn">Your Recipe Box</button>
                <img src="https://res.cloudinary.com/dlbg2caig/image/upload/v1741147887/avt_scwsbx.jpg" alt="Avatar" />
            </div>
        </header>
    );
}

export default Header;
