import React, {useState} from "react";
import FormActive from "./FormActive";
import FormComplete from "./FormComplete";
import "./App.css";



const App = () => {
  const initialValues = {
    cardHolder: "", 
    cardNumber: "", 
    expirationMonth: "", 
    expirationYear: "", 
    cvc: ""
  };
  
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    
    if (!values.cardHolder.trim()) {
      errors.cardHolder = "Card holder name is required!";
    }
    if (!values.cardNumber.trim()) {
      errors.cardNumber = "Card number is required!";
    } else if (values.cardNumber.length < 16) {
      errors.cardNumber = "CardNumber cannot exceed less than 16 characters";
    } else if (values.cardNumber.length > 16) {
      errors.cardNumber = "CardNumber cannot exceed more than 16 characters";
    }
    if (!values.expirationMonth.trim() && !values.expirationYear.trim()) {
      errors.expiration = "Expiration date is required!";
    }  else if (!values.expirationMonth.trim()) {
      errors.expiration = "Expiration month is required!";
    } else if (!values.expirationYear.trim()) {
      errors.expiration = "Expiration year is required!";
    } 
    if (!values.cvc.trim()) {
      errors.cvc = "Cvc is required!";
    } else if (values.cvc.length < 3) {
      errors.cvc = "Cvc must not be less than 3 characters!";
    } else if (values.cvc.length > 3) {
      errors.cvc = "Cvc must not be more than 3 characters!";
    } 
    return errors;
  };

  return (
    <div className="App">
      <main>
      <div className="container">
      <div className="card-container">
      <div className="visa-card-backend">
          <div className="card-cvc">
            <span>{formValues.cvc}</span>
          </div>
        </div>
        <div className="visa-card-frontend">
          <div className="visa-card-content">
            <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
            <div className="card-display-number">
              <h3>{formValues.cardNumber}</h3>
            </div>
            <div className="card-info">
              <div className="card-display-name">
                <h3>{formValues.cardHolder}</h3>
              </div>
              <div className="card-exp-date">
                <span>{formValues.expirationMonth}/{formValues.expirationYear}</span>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="form-container">
           {Object.keys(formErrors).length === 0 && isSubmit ? (
            <FormComplete/>
          ) : (   
            <FormActive
            handleSubmit={handleSubmit}
            formValues={formValues}
            formErrors={formErrors}
            handleChange={handleChange}
            />
          )}
      </div>
    </div>
  </main>
    </div>
  )
}

export default App
