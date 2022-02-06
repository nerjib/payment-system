import React from 'react';


export default function AddCutomer(props){



    return(
        <div id="main">
        <div id="checkout">
          <div id="payment-form">
  
            <form id="account-form">
              <fieldset>
                <label>
                  <span>Name</span>
                  <input type="text" name="name" id="name" value="Acme Inc" className="field"/>
                </label>
  
                <label>
                  <span>URL</span>
                  <input type="text" name="url" id="url" value="http://rocketrides.io" className="field"/>
                </label>
  
                <label>
                  <span>Tax ID</span>
                  <input type="text" name="tax_id" id="tax_id" value="000000000" className="field"/>
                </label>
  
                <label>
                  <span>Phone</span>
                  <input type="text" name="phone" value="4088675309" className="field"/>
                </label>
              </fieldset>
  
              <fieldset>
                <label>
                  <span>Account Number</span>
                  <input type="text" name="account_number" id="account_number" value="000123456789" className="field"/>
                </label>
                <label>
                  <span>Routing Number</span>
                  <input type="text" name="routing_number" id="routing_number" value="110000000" className="field"/>
                </label>
              </fieldset>
  
              <fieldset>
                <label>
                  <span>Address</span>
                  <input type="text" name="line1" id="line1" className="field" value="200 S. Virginia St."/>
                </label>
                <label>
                  <span>City</span>
                  <input type="text" name="city" id="city" className="field" value="Reno"/>
                </label>
                <label>
                  <span>State</span>
                  <input type="text" name="state" id="state" className="field" value="NV"/>
                </label>
                <label>
                  <span>Postal Code</span>
                  <input type="text" name="postal_code" id="postal_code" className="field" value="89501"/>
                </label>
              </fieldset>
  
              <button id="account-button">Create Account</button>
  
            </form>
          </div>
          <div id="debug-message"></div>
        </div>
      </div>
  
    )
}