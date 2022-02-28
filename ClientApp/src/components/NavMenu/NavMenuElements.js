import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'
export const LogoBrandWrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:164px;
    @media screen and (max-width:576px){
        left:50%;
    }
`

export const LogoBrand = styled.img`
    width: 64px;
    height: 64px;
`

export const BrandText = styled.h1`
    color:#F53838 ;
    font-weight: 700;
    font-size: 24px;
    opacity: 0.9;
    border-radius:4px;
    padding:2px;
    letter-spacing:1px;
    margin:0;
`

export const SignInBtn = styled(LinkR)`
    list-style-type: none;
    text-decoration: none;
    font-size:16px;
    display:flex;
    color:#F53855;
    font-weight: 700;
    &:hover{
        color:#F53855;
        opacity:0.8;
    }
    width:100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:576px){
        font-size: 20px;
        color:#fff;
        &:hover{
            color:#fff;
            opacity:0.8;
        }
    }
    
`

export const SignInWrap = styled.div`
    padding: 4px 8px;
    background-color: #fff;
    width:86px;
    height:36px;
    border:#F53855 solid 1px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:50px;
    margin-left: 24px;
    @media screen and (max-width:768px){
        margin-left: 12px;
    }
    @media screen and (max-width:576px){
        margin: 12px 0;
        width: 128px;
        padding-top:6px;
        padding-bottom: 6px;
        background: #F53855;
    }
    @media screen and (width:576px){
        display:none;   
    }

    
`

export const SearchWrap = styled.div`
    display:flex;
    margin-left:4px;
    @media screen and (max-width:992px) {
        display:none;
    }
`

export const InputSearch = styled.input`
    border-radius:50px;
    border:#ccc 1px solid;
    padding:4px 8px;
    outline:none;
    color:#747474;
`

export const FanpageWrap = styled.div`
    line-height: 35px;
`

export const FanpageLink = styled.a`
    text-decoration: none;
    display:block;
    width:100%;
    height: 100%;
    padding:8px;

`

export const NavServices = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
    display:block;
    padding:8px;
`