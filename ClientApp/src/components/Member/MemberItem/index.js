import React from 'react'
import {
  MemberContainer,
  MemberWrapper,
  MemberImgWrap,
  MemberTitle,
  MemberImg,
  MemberListIncentives,
  MemberItemIncentives,
  MemberCheck,
  MemberIncentives,
  MemberMinPoint,
  MemberSeeMore
} from './MemberItemElements'

const MemberItem = ({ colorTheme, imgPath, typeMember, incentiveArray, minPoint }) => {
  return (
    <MemberContainer colorTheme={colorTheme}>
      <MemberWrapper>
        <MemberImgWrap>
          <MemberImg loading='lazy' src={imgPath} />
        </MemberImgWrap>
        <MemberTitle>
          {`${typeMember} Member`}
        </MemberTitle>
        <MemberListIncentives>
          {incentiveArray && incentiveArray.map((member,index) => {
            return (<MemberItemIncentives key={index}>
              <MemberCheck loading='lazy' src={require('../../../images/check-no-circle.svg').default} />
              <MemberIncentives>
                {member}
              </MemberIncentives>
            </MemberItemIncentives>)
          })}
        </MemberListIncentives>
        <MemberMinPoint colorTheme={colorTheme}>
          {`Upper ${minPoint} points`}
        </MemberMinPoint>
        <MemberSeeMore colorTheme={colorTheme}>
          {`See more`}
        </MemberSeeMore>
      </MemberWrapper>
    </MemberContainer>
  )
}

export default MemberItem