import "./Footer.css";
function Footer() {
    return (
        <footer>
            <div className="contact">
                <h2>About Us</h2>
                <p>Welcome t o our website, a wonderful place to explore and learn how to
                    cook like a pro.</p>
                <div>
                    <input className="btn-text" type="email" />
                    <button className="btn-send">Send</button>
                </div>
            </div>
            <div className="learn">
                <h2>Learn More</h2>
                <ul className="learn-list">
                    <li>Out Cooks</li>
                    <li>See Our Features</li>
                    <li>FAQ</li>
                </ul>

            </div>
            <div className="recipes">
                <h2>Recipes</h2>
                <ul className="recipes-list">
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            </div>

        </footer>);
}

export default Footer;