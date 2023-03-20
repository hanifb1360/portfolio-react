import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.scss";

const sideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }

  const closeSideMenu = () => {
    // function to close side menu
    props.closeMenu();
  };

  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <Link to='/skills' onClick={closeSideMenu}>
            SKILLS
          </Link>
        </li>
        <li>
          <Link to='/projects' onClick={closeSideMenu}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={closeSideMenu}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
