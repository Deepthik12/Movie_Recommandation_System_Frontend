import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-4">
                    <h5 className="heading_1">Links</h5>
                    <ul className="list-unstyled">
                        <li><Link className="footer_link" to='/'>Home</Link></li>
                        <li><Link className="footer_link" to='/aboutus'>About</Link></li>
                        <li><Link className="footer_link" to='/movies'>Movies</Link></li>
                        <li><Link className="footer_link" to='/contactus'>Contact</Link></li>
                    </ul>
                </div>                
                <div className="col-6 col-sm-4 ">
                    <div >
                        <h5 className="heading_1">Contact Developer</h5>
                        <>
                            <span className="title">Deepthi kondaveeti</span>
                            <br/>                            
                            <i className="fa fa-github"></i>: <a className="footer_link" href="https://github.com/deepthikondaveeti" target="_blank">deepthi-20</a><br />
                            <i className="fa fa-user"></i>: <a className="footer_link" href="https://deeepthi.vercel.app/" target="_blank">Portfolio</a>
                        </>                    
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-1">             
               
            </div>
        </div>
    </div>
    )
}

export default Footer;