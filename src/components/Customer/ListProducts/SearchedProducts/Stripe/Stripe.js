import React, { useState } from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Stripe({ total, seller, user, products }) {
  const [product] = React.useState({
    name: "CART",
    price: total,
    description: "CART",
  });
  const [toAdd, settoAdd] = React.useState([])
  React.useEffect(() => {
    console.log(products)
    products.map((prod)=>{
      settoAdd(old=>[...old,prod.productName]);
    })
    
    // fetch("http://localhost:5000/api/user/addbuyer", {
    //   method: "POST",
    //   credentials: "include",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email : user.email,
    //     seller_email : seller,
    //     product : toAdd
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    //   fetch("http://localhost:5000/api/user/addseller", {
    //   method: "POST",
    //   credentials: "include",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email : seller,
    //     buyer_email : user.email,
    //     product : toAdd
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

  }, []);

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={product.price * 100}
        name="Cart"
        billingAddress
        shippingAddress
        currency="INR"
        alipay
        bitcoin
        image="https://previews.123rf.com/images/marvinjk/marvinjk1604/marvinjk160400047/57411620-payment-methods-money-transfer-financial-transaction-banking-vector-concept.jpg"
      >
    <button className="btn"
    style={{backgroundColor:'rgb(131,0,0)',color:'white'}}
     onClick={()=>{
      fetch("http://localhost:5000/api/user/addbuyer", {
          method: "POST",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email : user.email,
            seller_email : seller,
            product : toAdd
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
          fetch("http://localhost:5000/api/user/addseller", {
          method: "POST",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email : seller,
            buyer_email : user.email,
            product : toAdd
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
    }}>PAY</button>
        </StripeCheckout>
    </div>
  );
}

export default Stripe;
