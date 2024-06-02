import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

    const [image,setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        weight:"",
        category:"Soya Snacks"

    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}))

    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("weight",Number(data.weight))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/product/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                weight:"",
                category:"Soya Snacks"
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className="add">
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="add-product-description">
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write content here' required></textarea>
            </div>
            <div className="add-product-category">
                <p>Product Category</p>
                <select onChange={onChangeHandler} name="category" >
                        <option value="Soya Snacks">Soya Snacks</option>
                        <option value="Soya beverages">Soya beverages</option>
                        <option value="Soya Nutrient">Soya Nutrient</option>
                        <option value="Soya Meal">Soya Meal</option>
                        <option value="Soya Cookies">Soya Cookies</option>
                    </select>
            </div>
            <div className="add-product-weight-price">
                <div className="add-weight flex-col">
                    <p>Product Weight</p>
                    {/* <select onChange={onChangeHandler} name="weight" >
                        <option value="10gm">10gm</option>
                        <option value="35gm">35gm</option>
                        <option value="50gm">50gm</option>
                        <option value="100gm">100gm</option>
                        <option value="125gm">125gm</option>
                        <option value="200gm">200gm</option>
                        <option value="250gm">250gm</option>
                        <option value="500gm">500gm</option>
                        <option value="1kg">1kg</option>
                        <option value="2.5kg">2.5kg</option>
                        <option value="5kg">5kg</option>
                    </select> */}
                    <input onChange={onChangeHandler} value={data.weight} type="Number" name='weight' placeholder= 'in gm' />
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder= '&#8377; 20' />
                </div>
            </div>
            <button type='submit' className='add-btn'>Add</button>
        </form>
    </div>
  )
}

export default Add