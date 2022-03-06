import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const SubscribeContainer = styled.div`
    display:flex;
    width:80%;
    height:auto;
    padding:56px 70px;
    align-items:center;
    margin:auto;
    box-shadow: 0px 0px 128px 1px #F0F0F0;
    margin-bottom:80px;
    @media screen and (max-width:1160px){
        width:74%;
    }
`

export const SubscribeWrapper = styled.div`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-between;
    @media screen and (max-width:1160px){
        flex-direction:column;
    }
`

export const SubscribeTextWrap = styled.div`
    display:flex;
    flex-direction:column;
    max-width:400px;
    
`

export const SubscribeTitle = styled.span`
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 45px;
    text-align: left;
    color:#0B132A;
    @media screen and (max-width:1160px){
        text-align:center;
    }
`

export const SubscribePara = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color:#4F5665;
    margin-top:20px;
    margin-bottom:0px;
    @media screen and (max-width:1160px){
        text-align:center;
        margin: 20px 0;
    }
`

export const SubscribeButton = styled(Link)`
    background:#F53838;
    color:#fff;
    outline:none;
    text-decoration:none;
    font-size: 16px;
    padding:18px 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
    border-radius:10px;
    box-shadow: inset 0px 0px 6px 4px #BE2828;
    transition: all 0.2s ease-in-out;
    &:hover{
        opacity: 0.8;   
        color: #fff;
    }
`