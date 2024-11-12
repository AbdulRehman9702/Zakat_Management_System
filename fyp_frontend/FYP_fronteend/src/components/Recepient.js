import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';

// Replace this with your actual public key from Stripe
const stripePromise = loadStripe('pk_test_51PQrVbILQxcKPUE9RmG4tgr3aNm9JshmVc5QT6NQK3Mk4Y5K1XmGa4yH9eXHtapL94dzOfPz65oISoG4ZgOCWL0100nzkCdguL');

const Recipient = () => {
  const [user, setUser] = useState(null);
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sessionId, setSessionId] = useState(null);
  const { id: paidToUserId } = useParams();

  console.log(paidToUserId);

  useEffect(() => {
    fetch(`http://localhost:8000/user/get/${paidToUserId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(err => console.log('Error fetching user:', err));
  }, [paidToUserId]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckout = async () => {
    console.log(paidToUserId);
    const response = await fetch('http://localhost:8000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: Number(price), name, email, paidToUserId }),
    });

    const result = await response.json();
    console.log(result); // Log the response from the server

    if (response.ok) {
      const { id: sessionId } = result;
      setSessionId(sessionId);

      const stripe = await stripePromise; // Wait for the Stripe instance
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
    } else {
      console.error('Error creating checkout session:', result);
    }
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        {user && (
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                <a href="/">
                  <img
                    src={`http://localhost:8000/${user.picture}`}
                    alt=""
                  />
                </a>
                <h1>{user.name}</h1>
              </div>
            </div>
          </div>
        )}

        <div className="profile-info col-md-9">
          <div className="panel">
            <div className="bio-graph-heading">
              {user?.description}
            </div>
            <div className="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div className="row">
                <div className="bio-row">
                  <p>
                    <span>Name </span>: {user?.name}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Country </span>: Pakistan
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>City</span>: {user?.city?.name}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Phone </span>: {user?.phone_number}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="panel col-md-6" style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="mb-5">Stripe Checkout</h1>
          <input className="p-3 mb-4"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
          <input className="p-3 mb-4"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          <input className="p-3 mb-4"
            type="number"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter amount"
          />
          <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Recipient;
