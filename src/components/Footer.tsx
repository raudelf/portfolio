import { contactEmail, githubLink, linkedInLink } from "../shared/utils";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__link btn-link"
              href={`mailto:${contactEmail}`}
            >
              E-mail
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link btn-link"
              href={linkedInLink}
              target="_blank"
            >
              LinkedIn <span className="visually-hidden">opens in new tab</span>
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link btn-link"
              href={githubLink}
              target="_blank"
            >
              Github <span className="visually-hidden">opens in new tab</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
