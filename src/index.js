import { render } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";

// function Greeting(){

//   return (
//     <>
//     <div>
//       <h1>Hello world</h1>
//     </div>
//     <div>
//       <h2>welcome to reactjs</h2>
//     </div>
//     </>
//   );
// }
/* components always return JSX
 
JSX Rules

1)  It returns only single element
 it means hole content  should enclouse
 with one single Element(ex<div>... </div>) ,in between we can create multiple elements
 instead of this we can enclouse using fragments <> ....</>.

2) use camelcase attribute

3) write className instead of class

***4) Every  tags should close .ex <img/>,<br/>,input/>-----etc. 



render will take two perameters
1 what you want to render   ( means greeting in the function name)
2 where you want to render 
(means to execute in public>>index.hrtml>>loine no 31 given id )

NESTING COMPONENTS meand combining the functions 

ex--*/

function Greeting(){

  return (
    <>
    <HelloWorld />
    <Message />
    </>
  );
}
function HelloWorld(){
  return ( <div>
      <h1>Hello world</h1>
    </div>
    );
}
function Message(){
  return (<div>
      <h1>welcome to react js world</h1>
    </div>
    );
}






// */

 ReactDom.render(<Greeting/>,document.getElementById("root"));
