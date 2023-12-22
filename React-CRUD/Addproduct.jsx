import React, { useState } from 'react'
import Modala from './Modala'
import axios from 'axios'


function Addproduct() {
    let [formdata, setFormdata] = useState({ name: '', price: '', color: '', brand: '' })

    let [model,setModel]=useState(false)
    

 // ! updating state with entered data fromt the ui

    let changeFormDAta = ({ target: { name, value } }) => 
    {
        setFormdata({ ...formdata, [name]: value })
        
    }

 // ! Submiting/Adding the Products the form data
    let submitFormDAta = async (e) => 
    {
       try
       {
          console.log(formdata);
           e.preventDefault();
           console.log("submitFormdata");
           let addproduct = await axios.post("https://dummyjson.com/products", formdata);
        // ! if the products get added by using the above axios method then then and 
        // ! and then only setmodel become true and the message(product added succesfully will be visible on the screen) 
 
        setModel(true)
        setFormdata(addproduct)
        console.log(addproduct);

       }
       catch(err)
       {
        console.log(err);
       }
    }

    return (
        <div>

         {model && <Modala data='Product Added Succesfully'/> }     
            <form onSubmit={submitFormDAta} method='post'>
                <div >
                    <input type="text"  placeholder='product name' name='name' value={formdata.name} onChange={changeFormDAta}/>
                </div>
                <div >
                    <input type="tel" placeholder='product price' name='price' value={formdata.price} onChange={changeFormDAta}/>
                </div>
                <div >
                    <input type="text"  placeholder='product color' name='color' value={formdata.color} onChange={changeFormDAta}/>
                </div>
                <div >
                    <input type="text"  placeholder='product brand' name='brand' value={formdata.brand} onChange={changeFormDAta}/>
                </div>
                <div >
                    <button type="submit">Add product</button>
                </div>
            </form>
        </div>
    )
}

export default Addproduct