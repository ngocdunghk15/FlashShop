import React from 'react'
import { FcShipped } from 'react-icons/fc'

import './ProductStyle.css'
const Product = ({ id, image, title, description, category, rating, price }) => {
  const productID = `product-${id}`
  const handleClick = (e) => {
    console.log(e.target, productID)
  }
  return (
    <div id={`product-${id}`} onClick={handleClick} className="product-container">
      <div className="product-wrapper">
        <div className="product-img--wrapper">
          <img style={{
            
          }} src={image} />
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
                {rating.rate}
                <img src={require('../../images/rate-icon.svg').default} />
              </span>
              <span className="product-count">{`Sold ${rating.count}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
