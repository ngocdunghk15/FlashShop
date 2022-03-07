import React from 'react'
import { BiFilterAlt } from 'react-icons/bi'
import './CategoryStyle.css'
const Category = (props) => {
  return (
    <>
      <div className="categoryContainer">
        <div className="category__header">
          <BiFilterAlt />
          <span className="category__title">SEARCH FILTERS</span>
        </div>
        <ul className="filter-list">
          <span className="filter-type">Category</span>
          <li className="filter-item">
            <input type="checkbox" value="men's clothing" id="menClothing" onChange={props.handleClick} />
            <label htmlFor="menClothing">Men's CloThing</label>
          </li>
          <li className="filter-item">
            <input type="checkbox" value="jewelery" id="jewelery" onChange={props.handleClick} />
            <label htmlFor="jewelery">Jewelery</label>
          </li>
          <li className="filter-item">
            <input type="checkbox" value="electronics" id="electronics" onChange={props.handleClick} />
            <label htmlFor="electronics">Electronics</label>
          </li>
          <li className="filter-item">
            <input type="checkbox" value="women's clothing" id="womenClothing" onChange={props.handleClick} />
            <label htmlFor="womenClothing">Women's Clothing</label>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Category
