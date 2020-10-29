import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import './HeaderStyles.css';

const Header = ({ siteTitle }) => (
  <div className="header">
    <header className="header__container">
      <div className="header__logo">
        <h1 className="">
          <Link
            to="/"
            className="header__logo"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="header__nav">
        <Link className="header__nav__link" to="/settings">Settings</Link>  
        <Link className="header__nav__link" to="/">Scores</Link>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
