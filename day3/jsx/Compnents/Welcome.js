import React from "react";

//using JSX
function Welcome() {
    return (
        <div id="mytext" className="text-success">
            <h1>Welcome User</h1>
        </div>
    );
}

//without JSX
// function Welcome () {
//  return React.createElement(
//      'div',
//      {id:"myText", className:"text-danger"},
//      React.createElement(
//          'h1',
//          nul,
//          'Welcome User'
//      )
//  )
// }

export default Welcome;