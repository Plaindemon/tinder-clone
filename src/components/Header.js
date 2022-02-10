import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useNavigate } from "react-router-dom";


function Header({ backButton }) {
    const navigate = useNavigate();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => navigate.replace(backButton)}>
                
                    <ArrowBackIcon fontSize="large" className="header"></ArrowBackIcon>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}


            <Link to="/">
                <img className="header__logo" src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="tinder logo" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;