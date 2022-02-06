   
import React from "react";

export default function ReactPayPal(props) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [amount, setAmount] = React.useState(0);

  const paypalRef = React.useRef();

  // To show PayPal buttons once the component loads
  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: "USD",
                  value: Number(props.amount),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
            alert(err)
        //   setError(err),
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  // If the payment has been made
  if (paid) {
    return <div>Payment successful.!</div>;
  }

  // If any error occurs
  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  const HandleChangeAmount =(e)=>{
      let {value} = e.target
      setAmount(value)
  }
  // Default Render
  return (
    <div>
      <h4>paying {props.name} {props.amount}</h4>

      <div ref={paypalRef} />
    </div>
  );
}