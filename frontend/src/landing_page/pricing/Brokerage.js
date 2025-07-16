import React from "react";
function Brokerage() {
  return (
    <div className="container mb-5" >
      <div className="row text-center border-top" style={{color:"#424242",marginBottom:"100px"}}>
      <div className="col-8 p-4">
        <a href=""style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3>
        </a>
        <ul style={{textAlign:"left",lineHeight:"2.8"}} className="text-muted fs-6">
          <li>₹100 per order for futures and options.</li>
          <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
          <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li> 
          <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
        </ul>
      </div>
      <div className="col-4 p-4">
      <a href=""style={{textDecoration:"none"}}><h3 className="fs-5">List of charges</h3></a>
      </div>
     
    </div>
    </div>
  );
}

export default Brokerage;