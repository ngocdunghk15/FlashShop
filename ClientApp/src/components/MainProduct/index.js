import React from 'react'
import axios from 'axios'
import { useState, useEffect, useReducer, createContext, useRef } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { IoCartSharp } from 'react-icons/io5'
import { BsBoxArrowRight } from 'react-icons/bs'

// Internal Import
import './MainProductStyle.css'
import Product from '../Product';
import { cartOnHover, cartOutHover } from './HandleEvent';
import StorageProduct from './StorageProduct/StorageProduct'
import EmptyCart from './EmptyCart/EmptyCart';

// Create Context

export const CartContext = createContext()
export const RemoveContext = createContext()

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
      {
        let tempArray = state.cart.filter((item) => {
          return item.date != action.product.date
        })
        return {
          cart: [...tempArray],
          product: {},
          quantity: 0
        }
      }
    case 'CLEAR_CART': {
      return {
        cart: [],
        product: {},
        quantity: 0
      }
    }
    default:
      alert('NOTHING HAPPEN!')
  }
}

const MainProduct = (props) => {
  const [cart, dispatchAction] = useReducer(reducerCart, initialState)
  const [data, setData] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [toolbarMode, setToolbarMode] = useState('default')
  const dataApiProduct = 'http://localhost:44465/products'

  // Manage Refs 
  const defaultElement = useRef();
  const ratingElement = useRef();
  const bestSellingElement = useRef();
  const increaseElement = useRef();
  const descreaseElement = useRef();
  const toggleStorage = useRef();
  const layerStorage = useRef();
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

  const handleRemoveFromCart = (product, quantity) => {
    dispatchAction({
      type: 'DELETE_FROM_CART',
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

  const handleCheckCart = () => {
    toggleStorage.current.classList.add('appear')
    layerStorage.current.classList.add('render')
  }

  const handleCloseStorage = () => {
    toggleStorage.current.classList.remove('appear')
    layerStorage.current.classList.remove('render')
  }

  const handleBuyNow = () => {
    handleCloseStorage()
    if (cart.cart.length == 0) {
      alert('Your cart is empty!')
    } else {
      dispatchAction({
        type: 'CLEAR_CART'
      })
      alert('Buy Successed!')
    }
  }

  useEffect(() => {
    const total = cart.cart.reduce((prevValue, currentValue) => {
      return prevValue + (currentValue.price * currentValue.quantity);
    }, 0)
    setTotalPrice(total)
  }, [cart])
  return (
    <CartContext.Provider value={handleAddToCart}>
      <RemoveContext.Provider value={handleRemoveFromCart}>
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
                {cart.cart.length == 0 ? <EmptyCart /> : ''}
                <div className="check-cart--wrapper" onClick={handleCheckCart}>
                  <div className="check-cart--btn">Check Your Cart</div>
                </div>
              </div>
            </div>
          </div>
          <div ref={layerStorage} className="storage-layer" onClick={handleCloseStorage}>
          </div>
          <div ref={toggleStorage} className="storage-container">
            <div className="storage-wrapper">
              <div className="storage__title--wrapper">
                <div className="storage__title">Storage</div>
                <BsBoxArrowRight className="storage__toggle" onClick={handleCloseStorage} />
              </div>
              {cart.cart.map((item, index) => {
                return (
                  <StorageProduct
                    key={index}
                    {...item}
                  />
                )
              })}
              {cart.cart.length == 0 ? <EmptyCart /> : ''}
            </div>
            <div className="storage__buy--wrapper">
              <div className="storage__total">{`Total: $${totalPrice}`}</div>
              <div className="storage__buy" onClick={handleBuyNow}>
                {cart.cart.length == 0 ? 'Nothing To Buy' : 'Buy Now'}
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
      </RemoveContext.Provider>
    </CartContext.Provider>
  )
}

export default MainProduct