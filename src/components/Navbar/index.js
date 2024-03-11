// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="nav-bar-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                className="logo"
                alt="website logo"
              />
              <ul className="middle-items">
                <li className="list-items">
                  <Link to="/" className="link-light">
                    Home
                  </Link>
                </li>
                <li className="list-items">
                  <Link to="/About" className="link-light"></Link>About
                </li>
              </ul>
              <button
                type="button"
                className="theme-button"
                testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </div>
          ) : (
            <div className="nav-bar-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                className="logo"
                alt="website logo"
              />
              <ul className="middle-items">
                <li className="list-items">
                  <Link to="/" className="link-dark">
                    Home
                  </Link>
                </li>
                <li className="list-items">
                  <Link to="/About" className="link-dark">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="theme-button"
                testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </div>
          )}{' '}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
