import React from "react";
function Hero() {
  return (
    <div className="container ">
    <div className="row text-center mt-5 p-5 border-bottom">
      <h1 style={{color:"#424242"}} >Charges</h1>
      <p className="mt-3 mb-4" style={{color:"#424242",fontSize:"1.25rem", fontWeight: "400"}}>List of all charges and taxes</p>
      </div>
      <div className="row text-center " style={{color:"#424242"}}>
      <div className="col-4 p-4"><img src="media/images/pricingEquity.svg" />
      <h1 className="fs-3">Free equity delivery</h1>
      <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col-4 p-4"><img src="media/images/intradayTrades.svg" />
      <h1 className="fs-3">Intraday and F&O trades</h1>
      <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
      </div>
      <div className="col-4 p-4"><img src="media/images/pricingEquity.svg" />
      <h1 className="fs-3">Free direct MF</h1>
      <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>
    </div>
    </div>
  );
}

export default Hero;