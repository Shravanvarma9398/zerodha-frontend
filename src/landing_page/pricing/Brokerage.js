import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <div className="col-6 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-center">Brokerage calculator</h3>
          </a>
          <ul
            className="text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-6 p-4">
           <a href="" style={{ textDecoration: "none"}}>
            <h3 className="fs-5 text-center">List of charges</h3>
          </a>
          <ul
            className="text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
          >
            <li>Equity Delivery — ₹0 (Free): No brokerage is charged on delivery trades, making long-term investing cost-free.</li>
            <li>
              Equity Intraday — ₹20 or 0.03%: Charged per executed order at the lower of ₹20 or 0.03% of trade value.
            </li>
            <li>
              Futures (Equity, Commodity, Currency) — ₹20 brokerage per executed options trade.
            </li>
            <li>Account Opening Charges —₹200 (one-time): One-time fee for activating your trading and demat account.</li>
            <li>Annual Maintenance Charge (AMC) — ₹300/year: Yearly charge for maintaining your demat account.</li>
            <li>Fund Transfer (via UPI) —Free: No charges for adding funds using UPI.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;










// import React from "react";

// function Brokerage() {
//   return (
//     <div className="container">
//       <div className="row p-5 mt-5 text-center border-top">
//         <div className="col-6 p-4">
//           <a href="" style={{ textDecoration: "none" }}>
//             <h3 className="fs-5">Brokerage calculator</h3>
//           </a>
//           <ul
//             style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
//             className="text-muted"
//           >
//             <li>
//               Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
//               GST per order.
//             </li>
//             <li>Digital contract notes will be sent via e-mail.</li>
//             <li>
//               Physical copies of contract notes, if required, shall be charged
//               ₹20 per contract note. Courier charges apply.
//             </li>
//             <li>
//               For NRI account (non-PIS), 0.5% or ₹100 per executed order for
//               equity (whichever is lower).
//             </li>
//             <li>
//               For NRI account (PIS), 0.5% or ₹200 per executed order for equity
//               (whichever is lower).
//             </li>
//             <li>
//               If the account is in debit balance, any order placed will be
//               charged ₹40 per executed order instead of ₹20 per executed order.
//             </li>
//           </ul>
//         </div>
//         <div className="col-6 p-4">
//           <a href="" style={{ textDecoration: "none" }}>
//             <h3 className="fs-5">List of charges</h3>
//           </a>
//           <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
//             className="text-muted">
//   <li>Equity Delivery — ₹0 (Free)</li>
//   <li>Equity Intraday — ₹20 or 0.03% per executed order (whichever is lower)</li>
//   <li>Futures (Equity, Commodity, Currency) — ₹20 or 0.03% per executed order</li>
//   <li>Options (Equity, Commodity, Currency) — ₹20 per executed order</li>
//   <li>Account Opening Charges — ₹200 (one-time)</li>
//   <li>Annual Maintenance Charge (AMC) — ₹300 per year</li>
//   <li>Fund Transfer (via UPI) — Free</li>
// </ul>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Brokerage;