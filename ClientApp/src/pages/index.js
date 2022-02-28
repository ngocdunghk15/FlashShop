import React from 'react'
import Content from '../components/ContentFL'
import Slider from '../components/Slider'
import { memberSilver } from '../components/Member/MemberItem/MemberData'
import Member from '../components/Member'
import MemberItem from '../components/Member/MemberItem'
const HomePage = () => {
  return (
    <>
      <Slider />
      <Content />
      <Member />
      
    </>
  )
}

export default HomePage