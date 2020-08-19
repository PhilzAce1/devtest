import React from 'react';

function App() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <img src={require('./assets/img/logo.svg')} alt="logo" />
          </li>
          <li>
            <img src={require('./assets/img/Icon-home-fill.svg')} alt="home" />{' '}
            Dashboard
          </li>
          <li>
            <img
              src={require('./assets/img/Icon-briefcase-fill.svg')}
              alt="gig"
            />
            Gigs
          </li>
          <li>
            <img
              src={require('./assets/img/Icon-npm-fill.svg')}
              alt="company nav"
            />
            Company
          </li>

          <li>
            <img
              src={require('./assets/img/Icon-person-fill.svg')}
              alt="person"
            />
            Account
          </li>
        </ul>
      </nav>
      <section>
        <header>
          <div>
            <div className="search_container">
              <i className="fas fa-search"></i>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
              />
            </div>
            <div>
              <ul>
                <li>
                  <img src={require('./assets/img/Group 140.svg')} alt="icon" />
                </li>
                <li>
                  <img
                    src={require('./assets/img/Icon-email.svg')}
                    alt="message-icon"
                  />
                </li>
                <li>
                  <img
                    src={require('./assets/img//Icon-settings.svg')}
                    alt="settings-icon"
                  />
                </li>
                <li>
                  <img
                    src={require('./assets/img/Rectangle 13.png')}
                    alt="user avatar"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Gigs</h3>
            <button className="btn btn_secondary">
              New gig <i className="fas fa-plus"></i>
            </button>
          </div>
        </header>
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
              <button className="btn btn_primary">Freelance</button>
            </li>
            <li>
              <button className="btn btn_primary">
                <img src="./img/Icon-move.svg" alt="" /> Keywords
              </button>
            </li>
            <li>
              <button className="btn btn_primary">
                <img
                  src={require('./assets/img/Icon-pin.svg')}
                  alt="button icon"
                />
                Location
              </button>
            </li>
            <li>
              <button className="btn btn_primary">
                <img
                  src={require('./assets/img/Icon-globe.svg')}
                  alt="remote friendly Icon"
                />
                Remote Friendly
              </button>
            </li>
            <li>
              <button className="btn btn_primary selected">
                <img
                  src={require('./assets/img/Icon-color-palette .svg')}
                  alt="color-pallet icon"
                />
                Design
                <i className="fas fa-check"></i>
              </button>
            </li>
            <li>
              <button className="btn btn_primary">
                <img
                  src={require('./assets/img/Icon-npm-fill.svg')}
                  alt="icon-npm-fill"
                />
                Contract
              </button>
            </li>
          </ul>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Role</th>
                <th>Company</th>
                <th>
                  Date <img src={require('./assets/img/stff.svg')} alt="icon" />
                </th>
                <th>
                  Salary
                  <img src={require('./assets/img/stff.svg')} alt="icon" />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="name" id="name" />
                </td>
                <td>Product Designer</td>
                <td>TM30</td>
                <td>20th, June 2020</td>
                <td>20,000-30,000</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="name" id="name" />
                </td>
                <td>Product Designer</td>
                <td>TM30</td>
                <td>20th, June 2020</td>
                <td>20,000-30,000</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="name" id="name" />
                </td>
                <td>Product Designer</td>
                <td>TM30</td>
                <td>20th, June 2020</td>
                <td>20,000-30,000</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="name" id="name" />
                </td>
                <td>Product Designer</td>
                <td>TM30</td>
                <td>20th, June 2020</td>
                <td>20,000-30,000</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </main>
  );
}
export default App;
