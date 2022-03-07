import React from 'react'
import Category from '../components/Category'
import MainProduct from '../components/MainProduct'
import { useState } from 'react'
import ProductContainer from '../components/ProductContainer'

const Products = () => {
  const [categories, setCategories] = useState([])
  function handleClick(e) {
    if (e.target.checked) {
      setCategories([...categories, e.target.value])
    } else {
      setCategories(prevState => {
        return Array.from(prevState).filter(item => {
          return (item !== e.target.value)
        })
      })
    }
  }
  return (
    <ProductContainer>
      <Category handleClick={handleClick} />
      <MainProduct products={categories} />
      
    </ProductContainer>
  )
}

export default Products

