import React from 'react';
import Button from '../../components/Button';
import Table from '../Table/Table';

function Home(props) {
  return (
    <article>
      <ul className="tab_header">
        <li>
          All gigs <span>3404</span>
        </li>
        <li>
          My gigs <span>1200</span>
        </li>
        <li>
          Rejected gigs <span>100</span>
        </li>
      </ul>
      <ul>
        <li>
          <Button type="primary">Freelance</Button>
        </li>
        <li>
          <Button type="primary">
            <img src="./img/Icon-move.svg" alt="" /> Keywords
          </Button>
        </li>
        <li>
          <Button type="primary">
            <img
              src={require('../../assets/img/Icon-pin.svg')}
              alt="button icon"
            />
            Location
          </Button>
        </li>
        <li>
          <Button type="primary">
            <img
              src={require('../../assets/img/Icon-globe.svg')}
              alt="remote friendly Icon"
            />
            Remote Friendly
          </Button>
        </li>
        <li>
          <Button type="primary" selected={true}>
            <img
              src={require('../../assets/img/Icon-color-palette .svg')}
              alt="color-pallet icon"
            />
            Design
            <i className="fas fa-check"></i>
          </Button>
        </li>
        <li>
          <Button type="primary">
            <img
              src={require('../../assets/img/Icon-npm-fill.svg')}
              alt="icon-npm-fill"
            />
            Contract
          </Button>
        </li>
      </ul>
      <Table />
    </article>
  );
}

export default Home;
