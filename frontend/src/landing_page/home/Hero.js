import React from "react";
function Hero() {
  return (
    <div className="container p-5"  >
        <div className="row text-center">
            <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" />
            <h1 >Invest in  everything</h1>
            <p style={{fontWeight:"italic",fontSize:"1.25rem"}}>online platform to invest in stocks,derivatives,mutual funds ETFs, bonds, and more.</p>
            <button className= 'p-2 btn btn-primary fs-4 mt-4 mb-5'style={{backgroundColor: "#387ed1",width:"21%",margin:"0 auto"}}>signup Now</button>
            
    </div>
    </div>
  );
}

export default Hero;
