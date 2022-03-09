import React from 'react'
import axios from 'axios'
import { useState, useEffect, useReducer, createContext, useRef } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { IoCartSharp } from 'react-icons/io5'
import {Link} from 'react-router-dom'

// Internal Import
import './MainProductStyle.css'
import Product from '../Product';
import { cartOnHover, cartOutHover } from './HandleEvent';
import StorageProduct from './StorageProduct/StorageProduct'
import EmptyCart from './EmptyCart/EmptyCart';

// Create Context

export const CartContext = createContext()

// Manage Cart

const initialState = {
  cart: [],
  product: {},
  quantity: 0
}

const reducerCart = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      {
        alert(`Added ${action.quantity} ${action.product.title} to cart!`)
        return {
          cart: [...state.cart, {
            'date': new Date().toLocaleDateString('vi-GB', {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }), 'quantity': action.quantity, ...action.product
          }],
          product: {},
          quantity: 0
        }
      }
    case 'DELETE_FROM_CART':
      alert('Deleted from cart!', state)
      break;
    default:
      alert('NOTHING HAPPEN!')
  }
}

const MainProduct = (props) => {
  const [cart, dispatchAction] = useReducer(reducerCart, initialState);
  const [data, setData] = useState([])
  const [toolbarMode, setToolbarMode] = useState('default');
  const dataApiProduct = 'https://fakestoreapi.com/products'

  // Manage Refs 
  const defaultElement = useRef();
  const ratingElement = useRef();
  const bestSellingElement = useRef();
  const increaseElement = useRef();
  const descreaseElement = useRef();

  useEffect(() => {
    axios.get(dataApiProduct)
      .then(res => {
        setData(res.data)
      })
      .catch(err => alert(err))
  }, [])

  // Filter Data
  let filterData = data.filter((item) => {
    return (props.products.includes(item.category))
  })
  if (filterData.length === 0) {
    filterData = [...data]
  }

  // Toolbar handle Mode

  function handleToolbarMode(filterData) {
    switch (toolbarMode) {
      case 'default':
        break;
      case 'rating':
        filterData.sort(
          function (prev, next) {
            return next.rating.rate - prev.rating.rate;
          }
        )
        break;
      case 'best-selling':
        filterData.sort(
          function (prev, next) {
            return next.rating.count - prev.rating.count;
          }
        )
        break;
      case 'increase-price':
        filterData.sort(
          function (prev, next) {
            return prev.price - next.price;
          }
        )
        break;
      case 'descrease-price':
        filterData.sort(
          function (prev, next) {
            return next.price - prev.price;
          }
        )
        break;
      default:
    }
  }

  handleToolbarMode(filterData)

  // Function Handle
  // Method add to cart
  const handleAddToCart = (product, quantity) => {
    dispatchAction({
      type: 'ADD_TO_CART',
      product: { ...product },
      quantity: quantity
    })
  }

  // Clear Toolbar

  const clearToolbar = (element) => {
    if (element.classList.contains('active-toolbar')) {
      element.classList.remove('active-toolbar')
    }
  }

  // Handle onClick toolbar
  const handleToolbar = (event) => {
    clearToolbar(defaultElement.current)
    clearToolbar(ratingElement.current)
    clearToolbar(bestSellingElement.current)
    clearToolbar(increaseElement.current)
    clearToolbar(descreaseElement.current)
    setToolbarMode(event.target.getAttribute('data-type'))
    event.target.classList.add('active-toolbar')
  }

  return (
    <CartContext.Provider value={handleAddToCart}>
      <div className="mainProduct">
        <div className="main-product__toolbar">
          <div className="toolbar-left--wrapper">
            <div ref={defaultElement} data-type="default" className="toolbar__default toolbar-btn active-toolbar" onClick={handleToolbar}>
              Default
            </div>
            <div ref={ratingElement} data-type="rating" className="toolbar__like toolbar-btn" onClick={handleToolbar}>
              Rating
            </div>
            <div ref={bestSellingElement} data-type="best-selling" className="toolbar__sold toolbar-btn" onClick={handleToolbar}>
              Best-Selling
            </div>
            <div ref={increaseElement} data-type="increase-price" className="toolbar__increase toolbar-btn" onClick={handleToolbar}>
              Increase Price
            </div>
            <div ref={descreaseElement} data-type="descrease-price" className="toolbar__descrease toolbar-btn" onClick={handleToolbar}>
              Descrease Price
            </div>
          </div>
          <div className="toolbar-right--wrapper">
            <IoCartSharp className="toolbar__cart" />
            <div className="cart-storage--wrapper">
              <h4 className="cart-storage__title">Recent Products</h4>
              {cart.cart.map((item, index) => {
                return (
                  <StorageProduct
                    key={index}
                    {...item}
                  />
                )
              })}
              {cart.cart.length == 0 ? <EmptyCart/> : ''}
              <div className="check-cart--wrapper">
                <Link to="/cart" className="check-cart--btn">Check Your Cart</Link>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <Row>
            {
              filterData.map((item, index) => {
                return (
                  <Col
                    className="product-col"
                    key={index}
                    lg={4}
                    md={6}
                    sm={12}
                    xl={3}
                  >
                    <Product
                      {...item}
                    />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div >
    </CartContext.Provider>
  )
}

export default MainProduct