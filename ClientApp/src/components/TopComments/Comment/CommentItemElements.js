import styled from 'styled-components'

export const CommentContainer = styled.div`
    display:flex;
    padding:30px;
    min-height: 240px;
    border-radius:10px;
    box-shadow:inset 0px 0px 1px 2px #DDDDDD ;
`



export const CommentWrapper = styled.div`
    display:flex;
    flex-direction:column; 
`

export const CommentInfo = styled.div`
    display:flex;
    height:50px;
    justify-content:space-between;
`

export const CommentContent = styled.div`
    display:flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color:#0B132A;
    margin-top:20px;
    height:90px;
    overflow: hidden;
    display:-webkit-box;
    -webkit-box-orient:vertical; 
    -webkit-line-clamp:3;
`

export const CommentInfoLeft = styled.div`
    display:flex;
    align-items:center;
`

export const CommentInfoRate = styled.div`
    display:flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    align-items:center;
`

export const CommentUserAvatar = styled.img`
    width:50px !important;
    height:50px;
    margin-right: 20px;
`

export const CommentUserInfo = styled.div`
    display:flex;
    flex-direction:column;
`

export const CommentUserName = styled.span`
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    margin-bottom:0px;
    display:flex;
    justify-content:flex-start;
`

export const CommentUserCountry = styled.span`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    display:flex;
    justify-content:flex-start;
`

export const CommentRateIcon = styled.img`
    display:flex;
    height:16px;
    width:16px;
    margin-left: 10px;
`
