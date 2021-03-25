import React from 'react';
import './Footer.modules.css';
import facebook from '../icons-img/facebook.png';
import linkedin from '../icons-img/linkedin.png';
import whatsapp from '../icons-img/whatsapp.png';
import youtube from '../icons-img/youtube.png';

function Footer(props) {
    return (
        <div>
            <footer className='bg-light footerst'>
                <div className='container-fluid footercont'>
                    <div className='row'>
                        <ul className="links">
                            <li><a href="#">SBI stock price fallen</a></li>
                            <li><a href="#">Adani Port stock price fallen</a></li>
                            <li><a href="#">IRFC stock price fallen</a></li>
                            <li><a href="#">HDFC stock price fallen</a></li>
                        </ul>
                    </div>
                    <div className='row socialmedia'>
                        <ul className="socailmediaicons">
                            <li><a href="#"><img src={facebook} alt="fb"></img></a></li>
                            <li><a href="#"><img src={linkedin} alt="li"></img></a></li>
                            <li><a href="#"><img src={whatsapp} alt="wa"></img></a></li>
                            <li><a href="#"><img src={youtube} alt="yt"></img></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
