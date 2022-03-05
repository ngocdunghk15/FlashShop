import styled from 'styled-components'

export const MemberContainer = styled.div`
    width:100%;
    height:auto;
    position:relative;
    border-radius: 10px;
    border:${({ colorTheme }) => {
        switch (colorTheme) {
            case 'silver':
                return '#D7D8D8';
            case 'gold':
                return '#F8DE7E';
            case 'platium':
                return '#B1E0D8';
            default:
                return '#fff';
        }
    }} 1px solid;
`

export const MemberWrapper = styled.div`
    width:100%;
    padding:52px;
    padding-bottom: 32px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const MemberImgWrap = styled.div`
    width:226px;
    height:208px;
`

export const MemberImg = styled.img`
    width:100%;
    height:100%;
`

export const MemberTitle = styled.h3`
    font-size: 18px;
    line-height: 30px;
    font-weight:500;
    color:#0B132A;
    margin-top:16px;
    margin-bottom: 30px;
`

export const MemberListIncentives = styled.ul`
    list-style-type: none;
    display:flex;
    flex-direction: column;
    min-height: 240px;
    padding:0;
    margin: 0;
    margin-bottom: 50px;
`

export const MemberItemIncentives = styled.li`
    display: flex;
    align-items: center;
    margin-bottom:10px;
`

export const MemberCheck = styled.img`
    width: 24px;
    height:24px;
    margin-right: 20px;
`

export const MemberIncentives = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color:#4F5665;
`

export const MemberMinPoint = styled.h3`
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    margin-bottom: 24px;
    color: ${({ colorTheme }) => {
        switch (colorTheme) {
            case 'silver':
                return '#D7D8D8';
            case 'gold':
                return '#F8DE7E';
            case 'platium':
                return '#B1E0D8';
            default:
                return '#fff';
        }
    }};
`

export const MemberSeeMore = styled.a`
    text-decoration: none;
    font-weight: 500;
    color:#fff;
    padding:13px 46px;
    border-radius:50px;
    background: ${({ colorTheme }) => {
        switch (colorTheme) {
            case 'silver':
                return '#D7D8D8';
            case 'gold':
                return '#F8DE7E';
            case 'platium':
                return '#B1E0D8';
            default:
                return '#fff';
        }
    }};
    box-shadow: inset 0px 0px 6px 4px ${({ colorTheme }) => {
        switch (colorTheme) {
            case 'silver':
                return '#C1C1C1';
            case 'gold':
                return '#DBC36E';
            case 'platium':
                return '#9CCDC5';
            default:
                return '#fff';
        }
    }};
    &:hover{
        color:#fff;
        cursor:pointer;
        opacity: 0.8;
    }
`