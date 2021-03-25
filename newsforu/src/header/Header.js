import React from 'react';
import './Header.modules.css';

function Header(props) {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light fontsize">
                <a className="navbar-brand" href="#">NewsForU</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse leftmenu" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home</a>
                        <a className="nav-item nav-link navele" href="#">Politics</a>
                        <a className="nav-item nav-link navele" href="#">Technology</a>
                        <a className="nav-item nav-link navele" href="#">Sports</a>
                        <a className="nav-item nav-link navele" href="#">Gaming</a>
                        <a className="nav-item nav-link navele" href="#">Stocks</a>
                    </div>

                </div>
            </nav>

        </div>
    );
}

export default Header;


