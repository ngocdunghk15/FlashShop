import React from 'react'
import Content from '../components/ContentFL'
import Slider from '../components/Slider'
import Member from '../components/Member'
import Advertisement from '../components/Advertisement'
import TopComments from '../components/TopComments'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import SignIn from './signin'

const HomePage = () => {
  return (
    <>
      <Slider />
      <Content />
      <Member />
      <Advertisement />
      <TopComments />
      <Subscribe />
      <Footer />
    </>
  )
}

export default HomePage