import React from "react";
import Display from "./Display";

function Buttons(props) {
  return (
    <button
      className={`h-12 w-full rounded-lg font-semibold text-lg transition-all duration-200 border-0`} onClick={()=>{
       if(props.name==='C'){
        props.setValue("");
       }
       else if(props.name==='='){
        const result=eval(props.value);
        props.setValue(result);
        // props.setValue("");
       }
       else{
        const newDis=props.value+props.name;
        props.setValue(newDis);
        console.log(newDis);
       }

      }}
    >
      {props.name}
    </button>
  );
}

export default Buttons;
