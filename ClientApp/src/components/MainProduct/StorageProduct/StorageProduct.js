import './StorageProductStyle.css'
import React, { useContext } from 'react'
import { RemoveContext } from '../index'


const StorageProduct = ({ id, image, title, description, category, rating, price, quantity, date }) => {
    const product = { id, image, title, description, category, rating, price,date}
    // Handle Function 
    const handleRemoveFromCart = useContext(RemoveContext);

    return (
        <div className="storage-product--wrapper">
            <div className="storage-product__img--wrapper">
                <img src={image} loading='lazy' alt="product-img" />
            </div>
            <div className="storage-product__content--wrapper">
                <div className="storage-product__title--wrapper">
                    <div className="storage-product__title">
                        {title}
                    </div>
                    <div className="storage-product__price">
                        ${price}
                    </div>
                </div>
                <div className="storage-product__quantity">{`Quantity: ${quantity}`}</div>
                <div className="date-remove--wrapper">
                    <div className="storage-product__date">
                        {`Time Order: ${date}`}
                    </div>
                    <div className="delete-product" onClick={() => {
                        handleRemoveFromCart(product,quantity)
                    }}>Remove</div>
                </div>
            </div>
        </div>


    )
}

export default StorageProduct