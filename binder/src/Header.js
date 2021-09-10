import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import TelegramIcon from '@material-ui/icons/Telegram';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className = "header">
            <Link to="/profile">
            <IconButton>
            <PersonIcon className = "header__icon" fontSize="large"/>
            </IconButton>
            </Link>

           <Link to ="/home">
           <ImportContactsIcon fontSize="large"/>
           </Link>
           
           <Link to="/chat">
           <IconButton>
           <TelegramIcon className = "header__icon" fontSize="large"/>
           </IconButton>
           </Link>
   

        </div>
    )
}

export default Header