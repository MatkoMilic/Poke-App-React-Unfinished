import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Styles.module.scss";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";

interface ISize {
  width: number;
  height: number;
}

const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState<ISize>();
  const { toggleTheme } = React.useContext(ThemeContext);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size && size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size?.width, menuOpen, size]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          HOME
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/pokelistpage" onClick={menuToggleHandler}>
                Pokemons
              </Link>
            </li>
            <li>
              <Link to="/profilepage" onClick={menuToggleHandler}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/optionspage" onClick={menuToggleHandler}>
                Options
              </Link>
            </li>
            <li>
              <button onClick={toggleTheme}>Toggle Theme</button>
            </li>
            <Outlet />
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
