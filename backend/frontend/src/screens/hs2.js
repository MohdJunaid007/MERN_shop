import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../products';
import Product from '../components/Product';
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions.js'


const HomeScreen = () => {
    // const [products, setProducts] = useState([])
    const dispatch = useDispatch()



    useEffect(() => {
        // const fetchProducts = async () => {
        //     const { data } = await axios.get('/api/products')
        //     setProducts(data);
        // } 
        // fetchProducts()

        dispatch(listProducts())
    }, [dispatch])

    const products = [];

    return (
        <>
            <h1 className='text-center'>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
