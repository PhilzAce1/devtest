import React from 'react';

function Form(props) {
  return (
    <article>
      <div id="wrapper">
        <header>
          <h4>New gig</h4>
        </header>
        <div>
          <div class="card card_small">
            <header>Basic Data</header>
            <p>Documentation</p>
          </div>
          <div class="card card_large">
            <form action="">
              <fieldset>
                <label for="role"> Role</label>
                <input type="text" name="role" id="role" placeholder="role" />
                <label for="company"> company</label>

                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="company"
                />
              </fieldset>
              <fieldset id="location">
                <legend>Location</legend>

                <select id="country" name="country">
                  {' '}
                </select>
                <select id="state/City" name="state/City">
                  {' '}
                </select>
                <input list="languages" id="language_id" />
                <datalist id="languages">
                  <option value="html">HTML</option>
                  <option value="java">Java</option>
                  <option value="perl">Perl</option>
                  <option value="php">PHP</option>
                  <option value="ruby-on-rails">Ruby on Rails</option>
                </datalist>
              </fieldset>
              <fieldset id="tags">
                <legend>Add tags</legend>
                <input
                  type="text"
                  value="html,input,tag"
                  data-role="tagsinput"
                ></input>
              </fieldset>
              <div class="btn_buttons">
                <button class="btn btn_primary">Back</button>
                <button class="btn btn_secondary">Add gig</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Form;
