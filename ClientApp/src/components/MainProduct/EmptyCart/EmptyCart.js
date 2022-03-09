import React from 'react'
import './EmptyCartStyle.css'
const EmptyCart = () => {
    return (
        <div className="empty-cart--wrapper">
            <div className="empty-cart--title">EMPTY CART!</div>
            <img src={require('../../../images/empty-cart.svg').default} />
        </div>
    )
}

export default EmptyCart