import React, { useState } from "react";


const IncDecFunction = () =>{

    const [num , setNum] = useState(0);

    const increNumber = () =>{
        setNum(num + 1);
    }

    const decreNumber = () =>{
        if(num != 0){
            setNum(num-1);
        }else{
            alert("Zero se niche nhi jana bhai");
        }
        
    }


    return(
        <>
        <div className="main_div">
        <div className="center_div">
        <h1> {num} </h1>
        <div className="btn_div">
        <button onClick={increNumber}> Increm </button>
        <button onClick={decreNumber}> Decrem </button>

        </div>

        </div>

        </div>
        </>

    )
}
export default IncDecFunction;