import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MyProduct = (props) => {
    const {id} = useParams ();
    const [MyProduct, setMyProduct] = useState ([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res)=>{
            console.log (res);
            setMyProduct(res.data);
})
        .catch((err) => console.log (err) )
}, [])

    return (
        <div>
             <h2>Title: {MyProduct.title}</h2>
             <p>Price: ${MyProduct.price}</p>
             <p>Description: {MyProduct.description}</p>
        </div>
    );
}

export default MyProduct;
