import bbcLogo from '../../assets/logo-bbc.png';
import biLogo from '../../assets/logo-bi.png';
import forbesLogo from '../../assets/logo-forbes.png';
import tcLogo from '../../assets/logo-techcrunch.png';
import logoPath from '../../assets/logo.png';
import { Button } from '../Button/Button';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <img src={logoPath} alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3 header__heading-first">Your own home</h3>
      <h1 className="heading-1 header__heading-main">The ultimate personal freedom</h1>
      <Button title="View our properties" className="header__btn" />
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={bbcLogo} className="header__seenon-logo" alt="BBC logo" />
        <img src={forbesLogo} className="header__seenon-logo" alt="Forbes logo" />
        <img src={tcLogo} className="header__seenon-logo" alt="Tech crunch logo" />
        <img src={biLogo} className="header__seenon-logo" alt="Business insider logo" />
      </div>
    </header>
  );
};
