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
              <a className="header__link header__link--main" href="/">
                Raudel Flores
              </a>
            </div>

            <div className="header__links">
              <ul className="header__link-list">
                <li>
                  <a className="header__link" href="/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="header__link" href="/projects">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
