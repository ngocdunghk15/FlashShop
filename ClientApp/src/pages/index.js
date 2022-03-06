import React from 'react'
import Content from '../components/ContentFL'
import Slider from '../components/Slider'
import Member from '../components/Member'
import Advertisement from '../components/Advertisement'
import TopComments from '../components/TopComments'
import Subscribe from '../components/Subscribe'

const HomePage = () => {
  return (
    <>
      <Slider />
      <Content />
      <Member />
      <Advertisement />
      <TopComments />
      <Subscribe />
    </>
  )
}

export default HomePage