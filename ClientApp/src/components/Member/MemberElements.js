import styled from 'styled-components'

export const MemberContainer = styled.div`
    width:86%;
    height:auto;
    margin:auto;
    background-color:#fff;
    position:relative;
    padding-top:84px;
`

export const MemberWrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const MemberTitle = styled.h3`
    font-size: 35px;
    line-height: 50px;
    font-weight:500px;
    margin-bottom: 16px;
    color:#0B132A;
`

export const MemberPara = styled.p`
    color:#4F5665;
    font-size: 16px;
    line-height: 30px;
    margin-bottom:60px;
    text-align:center;
`

export const MemberInfoWrapper = styled.div`
    width:100%;
    height:auto;
    margin:auto;
`

export const MemberList = styled.ul`
    padding:0;
    display:flex;
    list-style: none;
    width:86%;
    margin:auto;
    justify-content:space-evenly;
    @media screen and (max-width:1160px) {
        flex-wrap:wrap;
    }
`

export const MemberItemWrapper = styled.li`
    width:30%;
    height:auto;
    margin: 0 25px;
    @media screen and (max-width:1280px){
        width:33.33%;
    }
    @media screen and (max-width:1160px) {
        width: 48%;
        margin: 0 48px;
        margin-bottom:56px;
    }
`

