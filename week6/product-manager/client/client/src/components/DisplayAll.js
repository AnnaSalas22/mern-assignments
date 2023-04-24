import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom"

const DisplayAll = (props) => {

    const [productList, setProductList] = useState ([]);
    const {_id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then((res) => {
            console.log(res); 
            setProductList(res.data.allproduct);
        })
        .catch((err)  =>     {
                console.log(err);
    })
        
    }, []);

    return (
        <div>
            <h2>All products here:</h2>


            {  
            productList && productList.map((product, index) => (
            <div key={index}> 
                <Link to={`/product/${product._id}`} >Title:{product.title}</Link>
                <br />
                <Link to={`/product/${product._id}`} >Description:{product.description}</Link>
                
            </div>
            ))
            }

        </div>
)
}

export default DisplayAll;




