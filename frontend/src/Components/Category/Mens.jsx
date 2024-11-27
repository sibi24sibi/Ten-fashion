import { useEffect, useState } from 'react'
import axios from 'axios'
import { handleAddToCart } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';

export const Mens = () => {

    const [filteredData, setFilteredData] = useState([]);
    console.log(filteredData)

    const navigate = useNavigate();

    const handleViewProduct = (id) => {
        navigate(`/product/${id}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products`);
                const allProducts = response.data;
                const MenProducts = allProducts.filter((product) => product.category === 'Men')
                setFilteredData(MenProducts)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();

    },[])

    return (
        <>
        {
            filteredData.length !== 0 ? (
                <div className='grid grid-cols-4 gap-10'>
                {
                    filteredData.map((data, index) => (
                        <div key={index} className='h-auto w-auto border-[1px] flex flex-col items-center rounded-lg'>
                            <img src={data.images} onClick={() => handleViewProduct(data._id)} className='h-[20rem] w-64 object-cover rounded-t-lg mb-2 hover:opacity-80 cursor-pointer' />
                            <div className='text-xl font-medium'>{data.productTitle}</div>
                            <div className='flex items-center gap-[2.5rem] my-2'>
                                <div className='text-xl font-medium'>Rs. {data.price}</div>
                                <button onClick={handleAddToCart} type='button' className='py-2.5 px-3.5 bg-blue-600 hover:bg-blue-800 text-sm text-white font-medium rounded-md'>Add to Cart</button>
                            </div>
                        </div>                
                    ))
                }
                </div>
            ) : (
                <div>There is no Items for Mens</div>
            )
        }
        </>
    )
}