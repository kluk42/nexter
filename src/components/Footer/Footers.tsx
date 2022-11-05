import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="" className="nav__link">
              Find your dream home
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Request proposal
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Download the home planner
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Contact us
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Submit your property
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Come work with us
            </a>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright">
        &copy; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere a mi quis
        iaculis. Maecenas malesuada vulputate dolor vitae dignissim.
      </p>
    </footer>
  );
};
