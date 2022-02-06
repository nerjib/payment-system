import React from 'react';
import './App.css';
import ReactPayPal from './components/reactpaypal';
import OrphansList from './components/orphans';
import "./styles.css";





export default function App() {
  const [checkout, setCheckout] = React.useState(false);

  return (
    <div className="App">
    <div className="product">
      <img
        src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
        alt="laptop"
        style={{ width: "50%", height: "50%" }}
      />
      <div>
          <OrphansList/>
         
      </div>
    </div>
  </div>
  );
}

/*/



import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './checkout';
import {CheckoutForm} from './stripe/checkoutForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <p className="App-intro">
          <Checkout
            name={'Your Company Name'}
            description={'Item that you sold'}
            amount={500}
          />
          <CheckoutForm/>
        </p>
        <div className="product">
      <img
        src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
        alt="laptop"
        style={{ width: "50%", height: "50%" }}
      />
      </div>

      </div>
    );
  }
}

export default App;*/