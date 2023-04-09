import { Link } from "react-router-dom";


const Home = (props)=>{
    return (
    <div>
    <h1 style={{color: "red" }} > Welcome! </h1>
    <Link to={"hello/"}>Go to Hello</Link>
    
    </div>
    )
    }

    export default Home;