import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
export const SliderContainer = styled.div`
    width:100%;
    height:auto;
    position:relative;
    background:#fff;
`
export const SliderWrapper = styled.div`
    width:86%;
    height:100%;
    margin:auto;
    display: flex;
    position:relative;
    justify-content: center;
    padding-top: 128px;
    flex-wrap: wrap;
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
    color: #f53838;
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
    width: 256px;
    background: #F53838;
    margin-bottom: 16px;
    border-radius:10px;
    box-shadow: inset 0px 0px 6px 4px #BE2828;
    transition: all 0.2s ease-in-out;
    &:hover{
        opacity: 0.8;   
    }
`

export const SliderInfoWrap = styled.div`
    display: flex;
    width:80%;
    margin:84px auto;
    height: 200px;
    /* background: linear-gradient(to bottom, #FAF8F8,#fff); */
    box-shadow: 12px 16px 12px 1px #EDEDED;
    border-radius:12px;
    @media screen and (max-width:992px){
        height:360px;
    }
`

export const SliderInfoList = styled.ul`
    border-radius:12px;
    margin:0;
    padding:0;
    display: flex;
    align-items: center;
    box-shadow:inset 0px 0px 28px 1px #F7EDEF;
    width: 100%;
    height: 100%;
    @media screen and (max-width:992px){
        flex-wrap: wrap;
    }
`

export const SliderInfoItemWrap = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    width: 33.33%;
    @media screen and (max-width:992px){
        width:100%;
    }
`

export const SliderInfoItem = styled.li`
    display: flex;
    list-style: none;
    padding:auto;
    align-items:center;
    @media screen and (max-width:992px){
        min-width:200px;
        margin-left:auto;
        margin-right: auto;
    }
`

export const SliderInfoImg = styled.img`
    width: 52px;
    height: 52px;
    margin-right:20px;
`

export const SliderInfoTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width:992px){
        flex-direction: row;
        align-items: center;
    }
`

export const SliderInfoData = styled.span`
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
`

export const SliderInfoType = styled.p`
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    margin-bottom: 0px;
    margin-left: 8px;
`
