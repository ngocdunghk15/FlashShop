import styled from 'styled-components'

export const ContentContainer = styled.div`
    padding-top:124px;
    padding-bottom:124px;
    width: 100%;
    height:auto;
    position:relative;
    background:#fff;
    @media screen and (max-width:992px){
        padding-top:84px;
    }
`

export const ContentWrapper = styled.div`
    width:86%;
    height:100%;
    margin:auto;
    display:flex;
    @media screen and (max-width:992px){
        flex-wrap: wrap;
    }
`

export const ContentImgWrap = styled.div`
    width:50%;
    margin-left: 32px;
    @media screen and (max-width:992px){
        width: 100%;
        margin-bottom: 128px;
    }
`

export const ContentImg = styled.img`
    width:100%;
    height:auto;   
`

export const ContentTextWrap = styled.div`
    width:40%;
    margin-left:auto;
    @media screen and (max-width:992px){
        width: 100%;
        text-align:center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const ContentTextTitle = styled.h2`
    font-size:35px;
    line-height:50px;
    font-weight:700;
    margin-bottom:20px;
    color:#0B132A;
    @media screen and (max-width:992px) {
        font-size: 56px;
        line-height: 74px;
    }
`

export const ContentTextPara = styled.p`
    font-size: 16px;
    line-height:30px;
    font-weight: 400;  
    color:#4F5665;
    margin-bottom: 20px;
    @media screen and (max-width:992px) {
        margin-top:16px;
        margin-bottom:36px;
    }
`

export const ContentList = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display:flex;
    flex-direction: column;
    @media screen and (max-width:992px){
        flex-direction: row;
        flex-wrap: wrap;
        margin:auto;
        justify-content:space-around;
        margin-left:48px;
    }
`

export const ContentItem = styled.li`
    display:flex;
    margin-bottom: 14px;
    @media screen and (max-width:992px){
        display:inline-flex;
        width: 40%;
    }
`

export const ContentIcon = styled.img`
    margin-right: 10px;
`

export const ContentItemText = styled.span`
    font-size: 14px;
    line-height:30px;
    font-weight: 400;
    color:#4F5665;
`