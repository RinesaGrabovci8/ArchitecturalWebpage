import React, { useContext, useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Context } from "../../Context/Context";
import LangFlag from "./LangFlag";
import { language } from "../../lang";
import logo from '../../assets/logo.png';
import Grid from "@mui/material/Grid";

const Navbar = () => {
  const { lang, dispatch } = useContext(Context);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changelang = () => {
    const setlang = lang === "en" ? "al" : "en";
    dispatch({
      type: "LANG",
      payload: { lang: setlang },
    });
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <NavLink to="/" className="logo-link">
              <img src={logo} alt="logo" />
            </NavLink>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="flex-end">
            {window.innerWidth <= 600 ? ( // Adjust the width breakpoint as needed
              <MenuIcon
                className="menu-icon"
                onClick={toggleMenu}
              />
            ) : null}
            <ul className={`nav-links ${menuVisible ? "active" : ""}`}>
              {language[lang].navbarLinks.map((obj) => (
                <li key={obj.name}>
                  <NavLink to={obj.path} onClick={() => setMenuVisible(false)}>
                    {obj.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button onClick={changelang}>
              <LangFlag lang={lang} />
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Navbar;
