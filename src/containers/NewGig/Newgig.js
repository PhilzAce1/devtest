import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
function Newgig(props) {
  return (
    <article>
      <div id="wrapper">
        <header>
          <h4>New gig</h4>
        </header>
        <div>
          <div className="card card_small">
            <header>Basic Data</header>
            <p>Documentation</p>
          </div>
          <div className="card card_large">
            <header></header>
            <fieldset>
              <legend>Salary</legend>
              <input
                type="text"
                name="minimum"
                id="minimum"
                placeholder="minimum"
              />
              <input
                type="text"
                name="maximum"
                id="maximum"
                placeholder="maximum"
              />
            </fieldset>
            <div className="btn_buttons">
              <Link to="/">
                <Button type="primary">Back</Button>
              </Link>
              <Link to="/form">
                <Button type="secondary">Add gig</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Newgig;
