import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth'

//Client-ID:  386352984524-2skke5emicv4n9o3ufsuvh2jt3nbvlkb.apps.googleusercontent.com


const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default Header;