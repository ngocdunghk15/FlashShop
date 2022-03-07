import React from 'react'
import './productStyle.css'

const ProductContainer = (props) => {
  return (
    <div className="product-container">
      {props.children}
    </div>
  )
}

export default ProductContainer
