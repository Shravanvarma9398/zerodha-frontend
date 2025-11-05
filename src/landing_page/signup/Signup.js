import React, { useState } from "react";

function Signup() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
      }}
    >
      <div
        className="card shadow-sm p-4 border-0"
        style={{
          width: "100%",
          maxWidth: "500px",
          minHeight: "520px", // increased height
          borderRadius: "12px",
        }}
      >
        <h4 className="text-center mb-4 text-primary">
          Open your Zerodha Account
        </h4>

        {step === 1 && (
          <>
            <h6 className="mb-3">Step 1: Enter your mobile number</h6>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter mobile number"
            />
            <button className="btn btn-primary w-100" onClick={nextStep}>
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h6 className="mb-3">Step 2: Verify OTP</h6>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter 6-digit OTP"
            />
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary" onClick={prevStep}>
                Back
              </button>
              <button className="btn btn-primary" onClick={nextStep}>
                Verify
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h6 className="mb-3">Step 3: Enter PAN Details</h6>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter PAN Number"
            />
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary" onClick={prevStep}>
                Back
              </button>
              <button className="btn btn-primary" onClick={nextStep}>
                Continue
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h6 className="mb-3">Step 4: Personal Information</h6>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Date of Birth (DD/MM/YYYY)"
            />
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary" onClick={prevStep}>
                Back
              </button>
              <button className="btn btn-primary" onClick={nextStep}>
                Continue
              </button>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h6 className="mb-3">Step 5: Bank Account Details</h6>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Account Number"
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="IFSC Code"
            />
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary" onClick={prevStep}>
                Back
              </button>
              <button className="btn btn-success" onClick={nextStep}>
                Finish
              </button>
            </div>
          </>
        )}

        {step === 6 && (
          <div className="text-center">
            <img
              src="/media/images/success.svg"
              alt="Success"
              style={{ width: "80px", marginBottom: "15px" }}
            />
            <h5 className="text-success mb-2">Signup Completed!</h5>
            <p className="text-muted">
              Your account setup steps are complete. We’ll contact you soon.
            </p>
            <button className="btn btn-primary w-100" onClick={() => setStep(1)}>
              Start Over
            </button>
          </div>
        )}

        <div className="text-center mt-4 text-muted" style={{ fontSize: "14px" }}>
          Step {step} of 6
        </div>
      </div>
    </div>
  );
}

export default Signup;
