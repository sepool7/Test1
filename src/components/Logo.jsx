// components
import {NavLink} from 'react-router-dom';

// assets
import logo from '@assets/xchain.svg';

const Logo = () => {
    return (
        <NavLink className="logo d-inline-flex align-items-center g-10" to="/">
            <img className="logo_img" src={logo} alt="xchain"/>
            <span className="logo_text h4">ChainBlock</span>
        </NavLink>
    );
}

export default Logo