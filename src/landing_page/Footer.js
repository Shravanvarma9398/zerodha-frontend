import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 py-5">

        {/* Row 1 */}
        <div className="row">
          <div className="col-md-3 mb-3">
            <img src="media/images/logo.svg" alt="Logo" style={{ width: "50%" }} />
            <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-md-3 mb-3">
            <p className="fw-bold">Company</p>
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>About</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Products</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Pricing</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Referral programme</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Careers</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Zerodha.tech</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Zerodha.tech</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Press & media</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Zerodha cares (CSR)</a><br />
          </div>

          <div className="col-md-3 mb-3">
            <p className="fw-bold">Support</p>
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Contact</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Support portal</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Z-Connect blog</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>List of charges</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Downloads & resources</a><br />
          </div>

          <div className="col-md-3 mb-3">
            <p className="fw-bold">Account</p>
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Open an account</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>Fund transfer</a><br />
            <a href="#" className='text-muted' style={{textDecoration: "none"}}>60 days challenge</a><br />
          </div>
        </div>

        {/* Long Legal Text */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633. 
            CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. 
            Registered Address: #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, 
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. 
            For any complaints, write to complaints@zerodha.com or dp@zerodha.com. 
            Please read the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on the SCORES portal. 
            Mandatory details: Name, PAN, Address, Mobile Number, Email ID. 
            Benefits: Effective Communication, Speedy redressal of grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. 
            Receive transaction info directly from the Exchange on your mobile/email. 
            KYC is a one-time exercise while dealing in securities markets. 
            If you find anyone claiming to be part of Zerodha and offering stock tips or trading on your behalf, 
            please create a ticket here.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="mt-4 mb-5">
          <a href="#" className="me-3 text-muted fs-5" style={{textDecoration: "none"}}>NSE</a>
          <a href="#" className="me-3 text-muted fs-5" style={{textDecoration: "none"}}>BSE</a>
          <a href="#" className="me-3 text-muted fs-5" style={{textDecoration: "none"}}>MCX</a>
          <a href="#" className="me-3 text-muted fs-5" style={{textDecoration: "none"}}>Terms & Conditions</a>
          <a href="#" className="me-3 text-muted fs-5" style={{textDecoration: "none"}}>Policies & Procedures</a>
          <a href="#" className="me-3 text-muted fs-5" style={{textDecoration: "none"}}>Privacy Policy</a>
          <a href="#" className="me-3 text-muted fs-5" style={{textDecoration: "none"}}>Disclosure</a>
          <a href="#" className="me-3 text-muted fs-5" style={{textDecoration: "none"}}>For Investor's Attention</a>
          <a href="#" className="me-3 text-muted fs-5" style={{textDecoration: "none"}}>Investor Charter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
