import React, { useState } from "react";
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
    let [amountVisble, setAmountVisible] =React.useState(false)

    let [accId, setAccId] =React.useState('')


//const stripePromise = loadStripe("pk_test_35p114pH8oNuHX72SmrvsFqh00Azv3ZaIA");
const stripePromise = loadStripe('pk_test_51KPk4hG3qtUfMBk1c7KIO4k2StNjba0iIYEzpevqteHPzWbHJzm1icERUEacR0wHSSoltqiiFZWkkLHnJ6JE1ZnP00yHF9YdQu', {
    stripeAccount: accId
  });

//https://zazzau.herokuapp.com/api/v1/orphund/account/acct_1KPynZQCiOKcei5k

    let orphans=[
        {
        name: 'Jon Doe',
        email: 'john@test.com',
        accountId: 'acct_1KQ4Le4QwoeCtvUl'
    },
    {
        name: 'Sheik Sherif',
        email: 'peter@test.com',
        accountId: 'acct_1KQAjP4S9kVTan8b'
    }
]

const handlePayment = (email,name, accId) =>{
    setAmountVisible(true)
    setOrphanMail(email);
    setOrphanName(name)
    setAccId(accId)
    
}
const HandleChangeAmount =(e)=>{
    let {value} = e.target
    setAmount(value)
    
}
const handleProcessPay = async () =>{
   if(!amount || !accId){
       return alert('input amount')
   }

axios.get(`https://zazzau.herokuapp.com/api/v1/orphund/account/${accId}/${amount}`)
.then(res=>{
    let {client_secret}= res.data
    setClientKey(client_secret)
    //setAmount(0);
   // setAccId('')
   // alert(client_secret)
   setAmountVisible(false)
}).catch(err=>alert(err))
   

}
function GetBalance(props){
let [bal, setBal] = useState('')
    React.useEffect(()=>{
        axios.get(`https://zazzau.herokuapp.com/api/v1/orphund/getbalance/${props.id}`)
        .then(res=>{
           // alert(JSON.stringify(res.data))
           // let {client_secret}= res.data
          setBal(res.data.pending[0].amount/100)
            //setAmount(0);
           // setAccId('')
           // alert(client_secret)
           setAmountVisible(false)
        }).catch(err=>alert(err))
    
    },[])
    
    return(
        <div>
          Bal:  {bal}USD
        </div>
    )


}
    return(
        <div>

      {(orphanName )?  amountVisble  && <div>
            How much do you want to donate to {orphanName}?{amountVisble  &&<div>  <br/>
        <input type='number' onChange={HandleChangeAmount} value={amount}/> usd
        </div>}</div>: 
        <div style={{}}> 
              { Object.keys(orphans).map((e,i)=>
                <div key={i} style={{  margin:10,  backgroundColor:'grey'}}>
 <img
        src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
        alt="laptop"
        style={{ width: "20%", height: "20%", padding:30}}
      />          <br/>          {orphans[e].name}<br/> 
                    <GetBalance id={orphans[e].accountId}/>                   
                    <button onClick={()=>handlePayment(orphans[e].email,orphans[e].name,orphans[e].accountId)}>donate</button>
                </div>
            )}</div>
            }
  { orphanMail && amount &&  amountVisble &&   <button onClick={handleProcessPay}>Process Payment</button>}

{// orphanMail && amount &&   <ReactPayPal email={orphanMail} name={orphanName} amount={amount} />}
}


{clientKey && <Elements stripe={stripePromise}>
<CheckoutFormm  client_key={clientKey} amount={amount}/>
 </Elements>}
        </div>
    )

}