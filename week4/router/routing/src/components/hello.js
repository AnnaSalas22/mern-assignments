import { Link } from "react-router-dom";



const Hello = (props)=>{
    return (
    <div>
    <h1 style={{color: "blue" }}> The word is: Hello</h1>
    <Link to={"/red"}>Go to hello/ blue</Link>
    </div>
    )
    }
    
    export default Hello;