import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './nav.styles.scss';

const Nav = () => {
    return (
        <>
         <nav className="navigation">
            <Link className="logo-container" to="/"> 
                <CrownLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    SHOP     
                </Link>
            </div>
         </nav>  
         <Outlet /> 
        </>
    );
}

export default Nav;