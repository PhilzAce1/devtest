import React from 'react';

function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <img src={require('../assets/img/logo.svg')} alt="logo" />
        </li>
        <li>
          <img src={require('../assets/img/Icon-home-fill.svg')} alt="home" />{' '}
          Dashboard
        </li>
        <li>
          <img
            src={require('../assets/img/Icon-briefcase-fill.svg')}
            alt="gig"
          />
          Gigs
        </li>
        <li>
          <img
            src={require('../assets/img/Icon-npm-fill.svg')}
            alt="company nav"
          />
          Company
        </li>

        <li>
          <img
            src={require('../assets/img/Icon-person-fill.svg')}
            alt="person"
          />
          Account
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
