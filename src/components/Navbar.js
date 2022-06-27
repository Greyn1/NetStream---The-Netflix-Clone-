import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {

    const location = useLocation().pathname;
    const isHomeLocation = location === "/";
    console.log("location: ",location);
    console.log(isHomeLocation);

    const handleClick = (evt) => {
        const ref = document.getElementById(evt.target.innerText);
        console.log(ref);
        ref.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <>
            <div className={`navbar-container ${!isHomeLocation && "navbar-container-light"}`}>
                <div className="navbar-title-container">
                    <Link to='/' className="navbar-title">NetStream</Link>
                </div>
                <div className={`navbar-links-container ${!isHomeLocation && "navbar-links-hide"}`}>
                    <span onClick={handleClick}>New-Movies</span>
                    <span onClick={handleClick}>Upcoming-Movies</span>
                    <span onClick={handleClick}>Trending-Movies</span>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Navbar;