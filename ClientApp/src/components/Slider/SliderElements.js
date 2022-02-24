import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
export const SliderContainer = styled.div`
    width:100%;
    height:800px;
    position:relative;
`
export const SliderWrapper = styled.div`
    width:100%;
    height:100%;
    display: flex;
    position:relative;
    justify-content: center;
    padding-top: 128px;
    @media screen and (max-width:992px){
        flex-wrap: wrap;
    }
`

export const SliderTextWrap = styled.div`
    width:40%;
    margin-right: auto;
    padding-left: 32px;
    @media screen and (max-width:992px){
        width: 100%;
        margin-right:0;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const SliderImgWrap = styled.div`
    width:50%;
    @media screen and (max-width:992px){
        width: 100%;
        margin-top: 36px;
    }
`

export const SliderImg = styled.img`
    width:100%;
    height:auto;
`

export const SliderH1 = styled.h1`
    font-size:50px;
    font-weight: 700;
    line-height:70px;
    margin-bottom: 20px;
    color:#0B132A;
    @media screen and (max-width:1400px){
        font-size:40px;
        line-height:56px;
    }
    @media screen and (max-width:1200px){
        font-size:34px;
        line-height:40px;
    }
    @media screen and (max-width:992px){
        text-align: center;
        font-size: 56px;
        line-height:74px;
    }
    @media screen and (max-width:768px){
        font-size: 48px;
        line-height:56px;
    }
`
export const SLiderH1Strong = styled.span`
    font-weight: 900;
    margin-left: 14px;
    letter-spacing: 0.8px;
`

export const SliderPara = styled.p`
    font-size: 16px;
    color:#4F5665;
    line-height: 30px;
    margin-bottom: 50px;
    @media screen and (max-width:992px){
        text-align: center;
    }
`

export const SliderBtn = styled(LinkR)`
    color:#fff;
    text-decoration: none;
    font-weight: 700;
    line-height:25px;
    font-size: 16px;
    width:100%;
    height: 100%;
    display: flex;
    padding:18px 48px;
    &:hover{
        color:#fff;
    }
`

export const SliderBtnWrap = styled.div`
    display: flex;
    width: 250px;
    background: #F53838;
    border-radius:10px;
    transition: all 0.2s ease-in-out;
    &:hover{
        opacity: 0.8;   
    }
`