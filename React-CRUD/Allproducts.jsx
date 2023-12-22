import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Updateproduct from './Updateproduct'

import { useNavigate } from 'react-router-dom'

function Allproducts() {
    let [products, setProducts] = useState([])

    // ! Getting the products==================

   let getProducts = async () => {
        try {
            let { data } = await axios.get("https://dummyjson.com/products");
            console.log((data));
            setProducts(data)

        }
        catch (err)
        {
            console.log(err);
        }
    }
    useEffect(() => {
        getProducts()
    }, [])


    // ! view products==============================================

    let navigateToproduct = useNavigate()

    let viewProduct = (pid) => {
        navigateToproduct(`/product/${pid}`)
    }

    // ! delete product=================================
    let deleteProduct=async (pid) => {
        // setshowmodal(true)
        try {
            await axios.delete(`http://lcoalhost:3000/products/${pid}`)
            getProducts()

        }
        catch (err) {
            console.log(err);
        }


        // ! update Product

        let Updateproduct = (pid) => {
            navigateToproduct(`/updateproduct/${pid}`)
        }

    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>sl No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(({ id, name, price }, index) => 
                      {
                        return <tr key={id}>
                            <td>{index + 1} </td>
                            <td>{name} </td>
                            <td>{price} </td>
                            <td><button className='btn view' onClick={() => {
                                viewProduct(id)
                            }}>View</button></td>
                            <td><button className='btn update' onClick={() => {
                                Updateproduct(id)
                            }}>View</button></td>
                            <td><button className='btn delete' onClick={() => {
                                deleteProduct(id)
                            }}>View</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Allproducts