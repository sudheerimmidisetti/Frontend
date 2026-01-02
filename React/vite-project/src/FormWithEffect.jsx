import React, { useState } from "react";
import { useEffect } from "react";

function FormWithEffect(){
    const [X ,setX] = useState(0);

    useEffect(()=>{
        console.log("Sudheer_16");
    },[X]);

    return (
        <>
            <div>
                <label htmlFor="">FirstName :</label>
                <input type="text" placeholder="enter your firstname"/>
                <br />
                <label htmlFor="">LastName :</label>
                <input type="text" placeholder="enter your lastname"/>
                <br />
                <label htmlFor="">email :</label>
                <input type="text" placeholder="enter your email" />
                <br />
                <button  onClick={()=> {setX(X + 1)}}>submit</button>
            </div>
        </>
    );
}

export default FormWithEffect;