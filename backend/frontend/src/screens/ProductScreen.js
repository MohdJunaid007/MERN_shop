import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions.js';
import { productDetailsReducer } from '../reducers/productReducers.js'
//import products from '../products';
//import axios from 'axios';

const ProductScreen = ({ match, history }) => {
    // const [product, setProduct] = useState([])
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler=()=>{
history.push(`/cart/${match.params.id}?qty=${qty}`)
    }



    return <>
        <Link className='btn btn-light my-3' to='/'>GO BACK</Link>
        {loading ? <Loader /> : error ? <Message variant='danger'>{error} </Message> : (
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />

                        </ListGroup.Item>
                        <ListGroupItem>
                            Price : ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description : {product.description}
                        </ListGroupItem>
                    </ListGroup>

                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            {
                                product.countInStock > 0 && (
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}

                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                )}
                            <ListGroupItem>
                                <Button 
                                onClick={addToCartHandler}
                                style={{ width: '100%' }} className='btn btn-block ' type='button' disabled={product.countInStock == 0}>
                                    Add to Cart
                                </Button>
                            </ListGroupItem>
                        </ListGroup>

                    </Card>
                </Col>
            </Row>
        )}


    </>;
};

export default ProductScreen;
