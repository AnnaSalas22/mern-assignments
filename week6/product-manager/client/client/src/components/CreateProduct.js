import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = (props) => {
    const [product, setProduct] =useState({
        title:'',
        price:'',
        description:''
    })

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]:e.target.value})
    }
    

    const submitHandler= (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', product)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='onTheForm'>
                    <label className='formLabel'>Title:   </label>
                    <input type="text" name='title'
                    onChange={changeHandler} 
                    value={product.title}
                    />
                </div>

                <div className='onTheForm'>
                    <label className='formLabel'>Price:   </label>
                    <input 
                    onChange={changeHandler} 
                    name='price'
                    type="number" 
                    value={product.price}/>
                </div>

                <div className='onTheForm'>
                    <label className='formLabel'>Description:   </label>
                    <input 
                    onChange={changeHandler} 
                    name='description'
                    type="text" 
                    value={product.description}/>
                </div>
                        <input type='submit' className='CreateB' value="Create"/>
            </form>
            </div>
    );
}

export default CreateProduct;
