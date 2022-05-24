import { Link } from "react-router-dom";

const Header = (props) => {


    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

    return (
        <Header>
            <h1>My Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/projects">PROJECTS</Link>
            </nav>
        </Header>
    );
}

export default Header;