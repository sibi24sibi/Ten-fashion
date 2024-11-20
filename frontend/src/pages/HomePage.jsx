import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../Components/ProductCard';

export const HomePage = () => {

    const [products, setProducts] = useState([]);
    console.log(products)


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((response) => setProducts(response.data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);


    return (
        <div>

            <ProductCard data={products} />

        </div>

    )
}
