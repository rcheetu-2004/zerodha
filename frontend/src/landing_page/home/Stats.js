import React from "react";
function Stats() {
  return (
    <div className="container mt-4 p-4" >
      <div className="row p-4">
        <div className="col-6 p-4">
          <h1 className="mb-5">Trust with confidence</h1>
          <div className="mb-3">
            <h4>Customer-first always</h4>
            <p className="mb-3 text-muted" style={{ fontSize: "1.15rem" }}>
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="mb-3">
            <h4>No spam or gimmicks</h4>
            <p className="mb-3 text-muted" style={{ fontSize: "1.15rem" }}>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div className="mb-3">
            <h4>The Zerodha universe</h4>
            <p className="mb-3 text-muted" style={{ fontSize: "1.15rem" }}>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="mb-3">
            <h4>Do better with money</h4>
            <p className="mb-3 text-muted" style={{ fontSize: "1.15rem" }}>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-6 ">
          <img
            src="https://zerodha.com/static/images/ecosystem.png"
            style={{ width: "100%" }}>
          </img>
          <div className="text-center mt-4 ">
            <a className='mx-5 ' href=''style={{textDecoration:"none"}}>explore our products</a>
            <a href=''style={{textDecoration:"none"}}>try kite demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats; 
