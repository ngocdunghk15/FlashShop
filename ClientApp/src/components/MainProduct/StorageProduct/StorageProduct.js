import './StorageProductStyle.css'

import React from 'react'

const StorageProduct = ({ id, image, title, description, category, rating, price, quantity, date }) => {
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
                    <div className="storage-product__date">{`Time Order: ${date}`}</div>
                </div>
            </div>
        

    )
}

export default StorageProduct