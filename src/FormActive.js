import React from 'react'


function FormActive({handleSubmit, formValues, handleChange, formErrors}) {
    
  return (
    <>
          <form action="" className="form-active-state"  onSubmit={handleSubmit}>
          <div className="form-group">
          <label for="cardHolder" className="form-label"> Cardholder Name</label>
          <input 
          type="text" 
          name="cardHolder" 
          id="cardHolder" 
          className="form-control" 
          placeholder="e.g. Tafsiru Loum"
          value={formValues.cardHolder}
          onChange={handleChange}
          />
          </div>
          <p>{formErrors.cardHolder}</p>
          <div className="form-group">
            <label for="cardNumber" className="form-label"> Card Number</label>
            <input 
            type="text" 
            name="cardNumber" 
            id="cardNumber" 
            className="form-control" 
            placeholder="e.g. 1234 5678 9123 0000"
            value={formValues.cardNumber}
            onChange={handleChange}
            />
          </div>
          <p>{formErrors.cardNumber}</p>
          <div className="date-cvc-container">
            <div className="date-container">
              <div className="form-group">
                <label for="expirationDate" className="form-label">Exp. Date (mm/yy)</label>
                <input 
                type="text" 
                name="expirationMonth" 
                className="exp-date-input" 
                placeholder="MM"
                value={formValues.expirationMonth}
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="expirationYear" 
                className="exp-date-input" 
                placeholder="YY"
                value={formValues.expirationYear}
                onChange={handleChange}
                />
              </div>
              <p>{formErrors.expiration}</p>
            </div>
            <div className="cvc-container">
              <div className="form-group">
                <label for="cvc" className="form-label">Cvc</label>
                <input 
                type="text" 
                name="cvc" 
                id="cvc" 
                className="form-control" 
                placeholder="e.g. 123"
                value={formValues.cvc}
                onChange={handleChange}
                />
              </div>
              <p>{formErrors.cvc}</p>
            </div>
          </div>
          <button type="submit" >Confirm</button>
        </form>
    </>
  )
}

export default FormActive