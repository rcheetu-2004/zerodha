import React from "react";
function LeftSection({imageUrl,productName,productDescription,tryDemo,knowMore,playStore,appStore,TryDemo,KnowMore}) {
  return (
    <div className="container  mb-5 mt-5" >
      <div className="row" style={{color:"#424242"}}>
        <div className="col-5">
          <img src={imageUrl}/> 
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mb-4" >
          <a href={tryDemo} style={{marginRight:"110px"}}>{TryDemo}</a>
          <a href={knowMore}>{KnowMore}</a>
          </div>
          <div>
          <a href={playStore} style={{marginRight:"50px"}}><img src="media/images/googlePlayBadge.svg"></img></a>
          <a href={appStore}><img src="media/images/appstoreBadge.svg" ></img></a>
          </div>
    </div>
    </div>
    </div>
  
  );
}

export default LeftSection;