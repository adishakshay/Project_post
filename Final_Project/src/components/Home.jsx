import React from "react";
import '../asserts/Home.css';
import { Link } from "react-router-dom";
// import ProfileSettings from '../components/ProfileSettings'; 

function Home() {
    
    const externalLink = "https://www.sciencedirect.com/topics/computer-science/account-application";
    // const profileSettingsLink = "./ProfileSettings";

    return (
        <div>
            <title>Adish A</title>
            <header className="header">
                <a href="#" className="logo">Developer</a>
                <nav className="nav-items">
                    <a><Link to="./Home">Home</Link></a>
                    {/* <a><Link to="./About">About</Link></a> */}
                    <a><Link to="./Contact">Contact</Link></a>
                    <a><Link to="./Login">Login</Link></a>
                    <a><Link to="./Signup">Sign Up</Link></a>
                    <a><Link to="./ProfileSettings">
                        <button className="user-button">
                        </button>
                    </Link></a>
                </nav>
            </header>
            <main>
                <div className="intro">
                    <h1>Accounting Application</h1>
                    <p>I am a web developer and I love to create websites.</p>
                    {/* <button>Learn More</button> */}
                    <a href={externalLink} target="_blank" rel="noopener noreferrer">
                        <button className="but">Learn More</button>
                    </a>
                </div>
                <div className="achievements">
                    {/* Your achievements content */}
                </div>
                <div className="about-me">
                    {/* Your about me content */}
                </div>
            </main>
            <footer className="footer">
                {/* <div className="copy">&copy; 2022 Developer</div> */}
                <div className="bottom-links">
                    <div className="links">
                        <span>More Info</span>
                        <a href="#">Home</a>
                        <a><Link to="./ProfileSettings">Profile</Link></a>
                        <a><Link to="./Contact">Contact</Link></a>
                    </div>

                    <div className="links">
                        <span>Social Links</span>
                        <a href="https://www.linkedin.com/in/adish-a-717735258"><i className="fab fa-facebook">Linkedin</i></a>
                        <a href="https://www.instagram.com/_adish_sta/"><i className="fab fa-twitter">instagram</i></a>
                        <a href="https://github.com/adishakshay/Project_post"><i className="fab fa-instagram">GitHub</i></a>
                    </div>

                    <div className="links">
                        <span>Important Pages</span>
                        <a href="#">Terms and Conditions</a>
                        <a href="#">FAQ</a>
                        <a herf="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;

