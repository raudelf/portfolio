import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="header">
      <a href="#site-main" className="visually-hidden focusable skip-link">
        Skip to Main Content
      </a>
      <nav className="header__navigation" aria-label="header navigation">
        <div className="container">
          <div className="header__link-container">
            <div className="header__main-link">
              <Link className="header__link header__link--main" to="/">
                Raudel Flores
              </Link>
            </div>

            <div className="header__links">
              <ul className="header__link-list">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      [
                        "btn-secondary",
                        "header__link",
                        isActive ? "header__link--active" : "",
                      ].join(" ")
                    }
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      [
                        "btn-secondary",
                        "header__link",
                        isActive ? "header__link--active" : "",
                      ].join(" ")
                    }
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>
            </div>

            <HamburgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
