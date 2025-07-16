import React from "react";
function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  knowMore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row mt-5" style={{ color: "#424242" }}>
        <div className="col-5  " style={{ marginTop: "72px",padding:"100px" }}>
          <h1 className="mb-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <a href={learnMore}>{knowMore}</a>
        </div>
        <div className="col-5">
          <img src={imageUrl} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default RightSection;
