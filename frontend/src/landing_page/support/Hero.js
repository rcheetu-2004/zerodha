import React from "react";
function Hero() {
  return (
    <section className="container-fluid p-5" id="supportHero">
    <div className="p-3 " id= "supportWrapper">
      <h4 style={{marginTop:"30px",marginLeft:"-87px",marginBottom:"40px"}}>Support Portal</h4>
      <a style={{marginTop:"30px"}}href="" >Track Tickets</a>
      </div>
      <div className="row p-3 m-3" style={{paddingLeft:"30px"}} >
      <div className="col-6  p-3" >
      <h3 className="fs-4" style={{marginBottom:"32px"}}>Search for an answer or browse help topics to create a ticket
      </h3>
      <input style={{marginBottom:"10px"}} placeholder ="Eg. how do I activate F&O"/><br />
      <a style={{marginLeft:"12px"}}href="">Track account opening</a>
      <a style={{marginLeft:"12px"}}href="">Track segment activation</a>
      <a style={{marginLeft:"30px",marginBottom:"5px"}}href="">Intraday margins</a><br/>
      <a className="m-3 " href="">Kite user manual</a>
      </div>
      <div className="col-6  p-3" >
      <h3 className="fs-4">Featured</h3>
      <ol>
        <li style={{lineHeight:"2"}} className="fs-6"><a href="">Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a></li>
        <li style={{lineHeight:"2"}} className="fs-6"><a href="">Change in mutual fund settlement cycle due to settlement holiday on account of Annual Bank closing (April 01, 2025)</a></li>
      </ol>
    </div>
    </div>
      </section>
  );
}

export default Hero;
