import React from "react";
import './index.css'
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <Header type="back" />

            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" /> */}
            <div className="contactSection">
                <div className="emails">
                <div className="contact">
            <h1>Contact Us</h1>
            <div className="info">
                <div className="email">
                    <i className="bi bi-envelope-fill"></i>
                    <p>contact@ourcompany.com</p>
                </div>
                <div className="phone">
                    <i className="bi bi-telephone-fill"></i>
                    <p>+1234567890</p>
                </div>
                <div className="address">
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>123, ABC Street, XYZ City</p>
                </div>
            </div>
            <Link to="/" className="home-link">Go Back to Home</Link>
        </div>
                </div>
            </div>
            <Menu contact = {"yes"} home = {"no"}/>
        </div>
    )
}

export default HomePage;