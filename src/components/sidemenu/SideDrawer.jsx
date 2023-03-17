import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.scss";

const sideDrawer = (props) => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
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
    </nav>
  );
};
export default sideDrawer;
