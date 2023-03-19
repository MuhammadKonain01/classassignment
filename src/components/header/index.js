// import { render } from "@testing-library/react";
// import React from "react";
import React, {useState} from "react";

function Header( ){
    // let [state, setState] = useState(1);
    
let [input,setInput]= useState(" '");
    
    // function increament(){
    //     setState(state+1)

    // }

    // function decreament(){
    //     setState(state-1)
    // }

function inputChange(e){
    setInput(e.target.value,"test")

    
    console.log(e.target.value,"test")
}
    return (

        <div>

            <input value={input}onChange={inputChange}></input>
{/* 
            <h1> { props.myName }</h1>

           {state}
           <br />
           <button onClick={increament}>+</button>
           <br />
           <button onClick={decreament}>-</button> */}

           
        </div>
    )
}


export default Header;