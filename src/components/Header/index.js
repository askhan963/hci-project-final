import React, { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom";
import Menu from "../Menu";

function Header({ type }) {
    const isMobile = useMediaQuery({ maxWidth: 480 })
    let navigate = useNavigate();
    const showBackHeader = type && type == 'back'
    const withBack = <div className="header">
        <div className="w20" onClick={() => navigate(-1)}>
        <i class="bi bi-arrow-left icon-style-arrow"></i>
            {/* <img src={Back} /> */}
        </div>
        <div className="flex w60">
            <Link to={"/"}>V-Assist</Link>
       
        </div>
    </div>

    const noBack = <div className="header">
    <div className="flex">
        <Link to={"/"}>V-Assist</Link>
        {!isMobile && <Menu contact = {"no"} home = {"yes"}/>}
    </div>
</div>
    return (
        <div>
            {type == "noback"?noBack:withBack}
        </div>
    )
}
export default Header