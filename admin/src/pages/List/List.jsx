import React, { useEffect, useState } from 'react'
import './List.css'
// import './Loader.css'; // Import the loader styles
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading status

    const fetchList = async () => {
        setLoading(true); // Set loading to true while fetching data
        try {
            const response = await axios.get(`${url}/api/Product/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Error");
            }
        } catch (error) {
            toast.error("Error fetching data");
        } finally {
            setLoading(false); // Set loading to false after data fetching, regardless of success or failure
        }
    }

    const removeProduct = async (prodId) => {
        const response = await axios.post(`${url}/api/product/remove`, { id: prodId });
        await fetchList();
        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error("Error");
        }
    }

    useEffect(() => {
        fetchList();
    }, [])

    return (
        <div className="list flex-col">
            <p>All Product List</p>
            {loading ? ( // Check loading state and render loader or list accordingly
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="list-table">
                    <div className="list-table-format title">
                        <b>Image</b>
                        <b>Name</b>
                        <b>Price</b>
                        <b>Weight</b>
                        <b>Category</b>
                        <b>Action</b>
                    </div>
                    {list.length === 0 ? (
                        <div className="list-table-format empty">
                            <p>List is Empty</p>
                            <p className='sub'>Add products</p>
                        </div>
                    ) : (list.map((item, index) => {
                        return (
                            <div key={index} className='list-table-format'>
                                <img className="image" src={`${url}/images/` + item.image} alt="{item.name}.png" />
                                <p>{item.name}</p>
                                <p>&#8377; {item.price}</p>
                                <p>{item.weight}</p>
                                <p>{item.category}</p>
                                <p onClick={() => removeProduct(item._id)} className='cursor'>X</p>
                            </div>
                        )
                    }))}
                </div>
            )}
        </div>
    )
}

export default List
