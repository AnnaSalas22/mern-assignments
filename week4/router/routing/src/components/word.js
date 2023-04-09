import { Link } from "react-router-dom";
import React, {useState} from "react";
import {useParams} from 'react-router-dom';

//to be edited
const Word = (props)=>{
    const {id} =useParams()
    return (
    <div>
    <h1 style={{color: "purple" }}> The number is{id}</h1>
    <Link to={"/"}>Go to Home</Link>
    </div>
    )
    }
    
    export default Word;