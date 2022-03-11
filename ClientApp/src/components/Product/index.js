import React from 'react'
import { FcShipped } from 'react-icons/fc'
import { useState } from 'react'
import './ProductStyle.css'
import ProductShowUp from './ProductShowUp/ProductShowUp'
const Product = ({ id, image, title, description, category, rate, count, price }) => {
  const productID = `product-${id}`
  const dataResponse = { id, image, title, description, category, rate, count, price }
  const handleClick = (e) => {
    setShowUp(prevState => !prevState)
  }
  // State of show-product
  const [showUp, setShowUp] = useState(false)
  return (
    <div id={`product-${id}`} onClick={handleClick} className="product-container">
      <div className="product-wrapper">
        <div className="product-img--wrapper">
          <img src={image} loading='lazy' alt="product" />
        </div>
        <div className="product-info--wrapper">
          <div className="product-title--wrapper">
            <span className="product-title">{title}</span>
          </div>
          <div className="product-other--wrapper">
            <div className="product-price--wrapper">
              <span className="product-price">${price}</span>
              <FcShipped />
            </div>
            <div className="product-rate--wrapper">
              <span className="product-rate">
                {rate}
                <img src={require('../../images/rate-icon.svg').default} />
              </span>
              <span className="product-count">{`Sold ${count}`}</span>
            </div>
          </div>
        </div>
      </div>
      {showUp && <ProductShowUp handleClick={handleClick} {...dataResponse} />}
    </div>
  )
}

export default Product
