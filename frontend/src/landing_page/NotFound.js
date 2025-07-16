import React from 'react'
function NotFound() {
    return ( 
        <div className="container p-5 mb-5" style={{ marginTop: "85px" }}>
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found  </h1>
        <p style={{ fontWeight: "italic", fontSize: "1.25rem" }}>
            The page you are looking for does not exist. Please check the URL or
            return to the homepage.
        </p>
      </div>
    </div>
  );
}

     

export default NotFound;