import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'> 
            <img src={LogoS} alt="logo"/>
            <img className='subt-logo' src={LogoSubtitle} alt="slobodan"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassme="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassme="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassme="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noferrer' href="https://www.linkedin.com/in/malvaradoalburua/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noferrer' href="https://github.com/myrnitax">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noferrer' href="https://twitter.com/MyrnaCode">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noferrer' href="https://discord.com/">
                    <FontAwesomeIcon icon={faDiscord} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
    )

export default Sidebar

//imported Link
//imported LogoS