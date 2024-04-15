//import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
//import axios from 'axios';

//const WomenProducts = () => {
//    const [product, setProduct] = useState(null);
//    const { id } = useParams();

//    useEffect(() => {
//        const fetchProductDetails = async () => {
//            try {
//                const response = await axios.get(`https://localhost:7218/api/Products/${id}`);
//                setProduct(response.data);
//            } catch (error) {
//                console.error('Error fetching product details:', error);
//            }
//        };

//        fetchProductDetails();
//    }, [id]);

//    return (
//        <div>
//            {product ? (
//                <div>
//                    <h2>{product.productName}</h2>
//                    <p>{product.description}</p>
//                    <p>Price: ${product.price}</p>
//                    {/* Add more details as needed */}
//                </div>
//            ) : (
//                <p>Loading product details...</p>
//            )}
//        </div>
//    );
//};

//export default WomenProducts;
