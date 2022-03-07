import React from 'react'
import './MainProductStyle.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Product from '../Product';
const MainProduct = (props) => {
  const [data, setData] = useState([])
  const dataApiProduct = 'https://fakestoreapi.com/products'
  useEffect(() => {


    axios.get(dataApiProduct)
      .then(res => {
        setData(res.data)
        console.log('Done')
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
  return (
    <div className="mainProduct">
      <Container>
        <Row>
          {
            filterData.map((item, index) => {
              return (
                <Col
                 className="product-col"
                  key={index}
                  lg={3}
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
  )
}

export default MainProduct