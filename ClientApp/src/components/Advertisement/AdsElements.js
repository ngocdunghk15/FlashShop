import styled from 'styled-components'

export const AdsContainer = styled.div`
    width:86%;
    margin:auto;
    height:auto;
    display:flex;
`

export const AdsWrapper = styled.div`
    width:100%;
    height: auto;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const AdsTitle = styled.h3`
    font-size: 35px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color:#0B132A;
    margin-top: 150px;
`

export const AdsPara = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 74px;
`

export const AdsListImg = styled.ul`
    list-style: none;
    padding:0;
    margin:0;
    width: 100%;
    display:flex;
    justify-content:space-between;
    @media screen and (max-width:1028px){
        flex-wrap: wrap;
    }
`

export const AdsItemWrapper = styled.li`
    width: 49%;
    position:relative;
    height:auto;
    @media screen and (max-width:1028px){
        width:100%;
        margin-bottom: 36px;
    }
`

export const AdsImg = styled.img`
    width:100%;
    height:auto;
`

export const AdsItemWrapText = styled.div`
    position:absolute;
    max-width:75%;
    top:25%;
    left:50%;
    transform:translate(-50%, -50%);
    text-align: center;
`

export const AdsItemTitle = styled.h3`
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    color:${({ dark }) => (dark ? '#050505' : '#fff')};
    @media screen and (max-width:1028px){
        font-size: 40px;
    }
`

export const AdsItemText = styled.p`
    font-size: 21px;
    line-height: 29px;
    color:${({ dark }) => (dark ? '#1d1d1f' : '#f5f5f7')};
    @media screen and (max-width:1200px){
        font-size: 18px;
    }
    @media screen and (max-width:1028px){
        font-size: 24px;
    }
    @media screen and (max-width:768px){
        font-size: 16px;
    }
`