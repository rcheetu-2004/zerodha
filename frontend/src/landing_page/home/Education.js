import React from "react";
function Education() {
  return (
    <div className="container" style={{ marginTop: "85px" }}>
      <div className="row">
        <div className="col-6">
          <img src="/media/images/education.svg" style={{ width: "70%" }}></img>
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="mx-1" href="" style={{ textDecoration: "none" }}>
          Varsity →
          </a>
          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="mt-5" href="" style={{ textDecoration: "none" }}>
            TradingQ&A →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
