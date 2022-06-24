import React, { useState } from 'react';
import './App.css';

/*  Defining useState type prevents rendering when undefined values are
    passed to setCheckoutStep */
  /* type CheckoutStep = "Details" | "Shipping" | "Payment"; */


  /* Using enum means all type usage requires dot notation */
  enum CheckoutStep {
    Details = "Details",
    Shipping = "Shipping",
    Payment = "Payment"
  };

function App() {
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>(CheckoutStep.Details);

  return (
    <>
      {checkoutStep === "Details" && 
        <><h1>Details</h1><button type="submit" onClick={() => setCheckoutStep(CheckoutStep.Shipping)}>Next</button></>
      }
      {checkoutStep === "Shipping" && 
        <><h1>Shipping</h1><button type="submit" onClick={() => setCheckoutStep(CheckoutStep.Payment)}>Next</button></>
      }
      {checkoutStep === "Payment" && 
        <h1>Payment</h1>
      }
    </>
  );
}

export default App;
