import React from 'react';
import Button from '../../components/Button';

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Role</th>
          <th>Company</th>
          <th>
            Date <img src={require('../../assets/img/stff.svg')} alt="icon" />
          </th>
          <th>
            Salary
            <img src={require('../../assets/img/stff.svg')} alt="icon" />
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
            <Button>Delete</Button>
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
            <Button>Delete</Button>
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
            <Button>Delete</Button>
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
            <Button>Delete</Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
