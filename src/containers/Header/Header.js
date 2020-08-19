import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <header>
      <div>
        <div className="search_container">
          <i className="fas fa-search"></i>
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div>
          <ul>
            <li>
              <img src={require('../../assets/img/Group 140.svg')} alt="icon" />
            </li>
            <li>
              <img
                src={require('../../assets/img/Icon-email.svg')}
                alt="message-icon"
              />
            </li>
            <li>
              <img
                src={require('../../assets/img//Icon-settings.svg')}
                alt="settings-icon"
              />
            </li>
            <li>
              <img
                src={require('../../assets/img/Rectangle 13.png')}
                alt="user avatar"
              />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Gigs</h3>
        <Link to="/newgig">
          <Button type="secondary">
            New gig <i className="fas fa-plus"></i>
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
