import React from "react";
function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-3" >
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million zerodha clients contributr to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity and derivatives</p>
                </li>
                <li>
                  <p>Currency and derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity and derivatives</p>
                </li>
                <li>
                  <p>Currency and derivatives</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            className="mt-5"
            src="media/images/pressLogos.png"
            style={{ width: "90%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
