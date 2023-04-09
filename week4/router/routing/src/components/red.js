import { Link } from "react-router-dom";
import React, { useState } from "react";


const Red = (props)=>{
    return (
    <div>
    <h1 style= {{color: "blue", background: "red"}}> The word is: Hello</h1>
    <Link to={"/word/:id"}>Go to number</Link>
    </div>
    )
    }
    
    export default Red;