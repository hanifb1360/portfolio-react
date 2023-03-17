import { Link } from "react-router-dom";
import SideMenu from "../sidemenu/SideMenu";
import "./NavBar.scss";
import Logo from "../../assets/images/logo-white.svg";

const Navbar = (props) => (
  <header className='navbar'>
    <nav className='navbar_navigator'>
      <div className='toggle-btn'>
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
      <div className='navbar_logo'>
        <Link to='/'>
          <img
            className='logo'
            src={Logo}
            alt='This is the logotype of the page and also Hanif Bahari signature'
          />
        </Link>
      </div>
      <div className='spacer' />
      <div className='navbar_navigation-items'>
        <ul>
          <li>
            <Link to='/skills'>SKILLS</Link>
          </li>
          <li>
            <Link to='/projects'>PROJECTS</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
