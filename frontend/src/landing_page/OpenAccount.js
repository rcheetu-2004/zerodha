import React from "react";
function OpenAccount() {
  return (
    <div className="container p-5 mb-5" style={{ marginTop: "60px" }}>
      <div className="row text-center">
        <h1>Open a Zerodha account</h1>
        <p style={{ fontWeight: "italic", fontSize: "1.25rem" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-4 mt-4 mb-5"
          style={{ backgroundColor: "#387ed1", width: "21%", margin: "0 auto" }}
        >
          sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
