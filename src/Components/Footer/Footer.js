import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook,faAddressCard,faCamera,faAppleAlt} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const element = <FontAwesomeIcon icon={faAppleAlt} />
    const book = <FontAwesomeIcon icon={faAddressBook} />
    const adress= <FontAwesomeIcon icon={faAddressCard} />
    const camera = <FontAwesomeIcon icon={faCamera} />
    return (
        <div className="footer py-5">
            <Container>
                  <div className="footer-conter">
                       <ul className="social-icon">
                           <li><a href=".">{element}</a></li>
                           <li><a href=".">{book}</a></li>
                           <li><a href=".">{adress}</a></li>
                           <li><a href=".">{camera}</a></li>
                       </ul>
                       <div className="footer-text">
                       <p class="company-about fadeIn">© 2021 Programming Learning. Made With Love By <a href=".">Rakib</a></p>
                       </div>
                  </div>
            </Container>
        </div>
    );
};

export default Footer;