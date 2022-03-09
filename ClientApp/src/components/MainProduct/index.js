import React from 'react'
import './MainProductStyle.css'
import axios from 'axios'
import { useState, useEffect, useReducer, createContext } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Product from '../Product';

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
  console.log(cart)
  const [data, setData] = useState([])
  const dataApiProduct = 'https://fakestoreapi.com/products'
  useEffect(() => {
    axios.get(dataApiProduct)
      .then(res => {
        setData(res.data)
        console.log('Done')
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

  // Function Handle
  const handleAddToCart = (product, quantity) => {
    dispatchAction({
      type: 'ADD_TO_CART',
      product: { ...product },
      quantity: quantity
    })
  }
  return (
    <CartContext.Provider value={handleAddToCart}>
      <div className="mainProduct">
        <Container>
          <Row>
            {
              filterData.map((item, index) => {
                return (
                  <Col
                    className="product-col"
                    key={index}
                    lg={3}
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