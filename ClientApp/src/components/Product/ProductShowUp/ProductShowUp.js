// External Import
import React from 'react'
import { FcShipped } from 'react-icons/fc'
import { TiTimesOutline } from 'react-icons/ti'
import { BsFillCartCheckFill, BsCartPlus } from 'react-icons/bs'
import { useState } from 'react'

// Internal Import 
import './ProductShowUpStyle.css'

const ProductShowUp = ({ id, image, title, description, category, rating, price, handleClick }) => {
    function productClick(e) {
        e.stopPropagation()
    }
    // State quantity of product
    const [quantity, setQuantity] = useState(1)

    // Handle Click Button:

    // Handle Descrease Button
    const handleClickDescrease = () => {
        setQuantity(quantity => {
            if (quantity - 1 < 0) {
                return 0;
            }
            return quantity - 1;
        })
    }

    // Handle Increase Button
    const handleClickIncrease = () => {
        setQuantity(quantity => quantity + 1)
    }

    // Handle Add To Cart 
    const handleAdd = () => {
        alert('Add To Your Cart!')
    }
    // Handle Buy Now
    const handleBuy = () => {
        const emailSignIn = 'https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
        window.open(emailSignIn,"_blank","toolbar=yes,scrollbars=yes,resizable=yes")
    }
    return (
        <div className="showup-container" >
            <div className="showup-wrapper" onClick={productClick}>
                <div className="img-wrapper">
                    <img src={image} />
                </div>
                <div className="product__info--wrapper">
                    <div className="close-icon--wrapper">
                        <TiTimesOutline className="times-icon" onClick={handleClick} />
                    </div>
                    <div className="show-up__title--wrapper">
                        <BsFillCartCheckFill className="show-up__cart" />
                        <div className="text-show-up">
                            <span className="show-up__title">{title}</span>
                        </div>
                    </div>
                    <div className="show-up__rateCount">
                        <div className="show-up__rate">
                            <span>{rating.rate}</span>
                            <img src={require('../../../images/rate-icon.svg').default} />
                        </div>
                        <div className="show-up__count">
                            <span><strong>Sold</strong>{` ${rating.count} products`}</span>
                        </div>
                    </div>
                    <div className="show-up-price--wrapper">
                        <span className="show-up__price">${price}</span>
                    </div>
                    <div className="show-up__description">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;{description}</span>
                    </div>
                    <div className="show-up__features">
                        <div className="show-up__category">
                            <span><strong>Category: </strong>{category.toUpperCase()}</span>
                        </div>
                        <div className="show-up__freeShip">
                            <span><strong>Transport: </strong>
                                Free shipping
                            </span>
                            <FcShipped />
                        </div>
                    </div>
                    <div className="show-up__quantity--wrapper">
                        <div className="show-up__quantity--title">
                            QUANTITY:
                        </div>
                        <div className="show-up__quantity">
                            <button onClick={handleClickDescrease}>-</button>
                            <input className="quantity-text"
                                value={quantity}
                                onChange={(e) => {
                                    setQuantity(() => {
                                        if (e.target.value == '') {
                                            return 0;
                                        }
                                        return parseInt(e.target.value) >= 0 ? parseInt(e.target.value) : -parseInt(e.target.value);
                                    })
                                }} />
                            <button onClick={handleClickIncrease}>+</button>
                        </div>
                    </div>
                    <div className="show-up__order--wrapper">
                        <div className="show-up__add--wrapper" onClick={handleAdd}>
                            <BsCartPlus className="add-cart__icon" />
                            <span>Add To Cart</span>
                        </div>
                        <div className="show-up__buy--wrapper" onClick={handleBuy}>
                            <span>Buy Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductShowUp