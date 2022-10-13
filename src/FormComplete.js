import React from 'react'

function FormComplete() {
  return (
    <div className="form-container">
        <form action="" className="form-complete-state">
          <div className="form-complete-content">
            <div className="form-complete-icon">
              <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
            </div>
            <div className="form-complete-message">
              <h2>Thank You!</h2>
              <p>We've added your card details</p>
            </div>
            <button type="submit">Continue</button>
          </div>
        </form>
    </div>
  )
}

export default FormComplete