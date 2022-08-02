import React, { Component } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter} from 'react-icons/fa'
import {Link} from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h4>Company</h4>
                                <ul className="footer-items">
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Projects</li>
                                    <li>Career</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div class="col">
                          <h4>Quick Links</h4>
                          <ul className="footer-items">
                              <li>Success Stories</li>
                              <li>Achievements</li>
                          </ul>
                            </div>
                            <div class="col">
                                <h4>Follow Us</h4>
                                <div className="social-icons">
                                    <button type='button' className='social-button'>
                                    <Link className="social-link" to="#"> <FaInstagram /></Link>
                                    </button> 
                                    <button type='button' className='social-button'>
                                    <Link className="social-link" to="#">< FaFacebook/> </Link>
                                    </button> 
                                    <button type='button' className='social-button'>
                                    <Link className="social-link" to="#">< FaTwitter/> </Link>
                                    </button> 
                                    <button type='button' className='social-button'>
                                    <Link className="social-link" to="#">< FaWhatsapp/> </Link>
                                    </button> 
                                </div>
                            </div>
                        </div>
                            <p className="copyright">&copy; 2020 Ami Moradia. - All rights reserved.</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer