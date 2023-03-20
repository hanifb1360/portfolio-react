import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import "./app.scss";

import SideDrawer from "./components/sidemenu/SideDrawer";
import BackDrop from "./components/backdrop/BackDrop";
import { useState } from "react";

const Layout = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  // closeMenu function in sideDrawer
  const closeMenu = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <BackDrop click={backDropClickHandler} />;
  }

  return (
    <div className='app'>
      <Navbar drawerToggleClickHandler={drawerToggleClickHandler} />
      {/* pass down closeMenu as a prop */}
      <SideDrawer show={sideDrawerOpen} closeMenu={closeMenu} />
      {backdrop}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
