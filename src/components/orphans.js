import React from "react";
import ReactPayPal from "./reactpaypal";
import StripeContainer from '../stripe/stripeContainer'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../stripe/checkoutForm";
import CheckoutFormm from "../stripe/CheckoutFormm";
import axios from "axios";
  


export default function OrphansList(){
    const [checkout, setCheckout] = React.useState(false);
    let [orphanMail, setOrphanMail] = React.useState('')
    let [orphanName, setOrphanName] = React.useState('')
    const [amount, setAmount] = React.useState(0);
    let [clientKey, setClientKey] =React.useState('')
    let [accId, setAccId] =React.useState('')


//const stripePromise = loadStripe("pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA");
const stripePromise = loadStripe('pk_test_51KPk4hG3qtUfMBk1c7KIO4k2StNjba0iIYEzpevqteHPzWbHJzm1icERUEacR0wHSSoltqiiFZWkkLHnJ6JE1ZnP00yHF9YdQu', {
    stripeAccount: 'acct_1KQ4Le4QwoeCtvUl'
  });


    let orphans=[
        {
        name: 'Jon Doe',
        email: 'john@test.com',
        accountId: 'acct_1KQ4Le4QwoeCtvUl'
    },
    {
        name: 'Peter Pan',
        email: 'peter@test.com',
        accountId: 'acct_1KQ3bz7kRrgRglzY'
    }
]

const handlePayment = (email,name, accId) =>{
    setOrphanMail(email);
    setOrphanName(name)
    setAccId(accId)
    
}
const HandleChangeAmount =(e)=>{
    let {value} = e.target
    setAmount(value)
}
const handleProcessPay = async () =>{
    fetch('/account/2', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(function(r) {
        return alert(JSON.stringify(r.json()));
      }).then(function(response) {
        alert(JSON.stringify(response, null, 2));
      });

axios.get('localhost:4242/account/2')
.then(res=>{
  //  alert(res.data)
}).catch(err=>alert(err))
   

}
    return(
        <div>

      {orphanName?  <div>
            How much do you want to donate to {orphanName}? <br/>
        <input type='number' onChange={HandleChangeAmount} value={amount}/>
        </div>:
        <button onClick={handleProcessPay}>Process Pay</button>

          /*  Object.keys(orphans).map(e=>
                <div>
                    <img src='' width='30px'/>
                    {orphans[e].name}<br/>                    
                    <button onClick={()=>handlePayment(orphans[e].email,orphans[e].name,orphans[e].accountId)}>donate</button>
                </div>
            )*/
            }

{ orphanMail && amount &&   <ReactPayPal email={orphanMail} name={orphanName} amount={amount} />}



{clientKey && <Elements stripe={stripePromise}>
<CheckoutFormm  client_key={clientKey}/>
 </Elements>}
        </div>
    )

}