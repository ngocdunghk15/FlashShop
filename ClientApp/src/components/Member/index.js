import React from 'react'
import {
    MemberContainer,
    MemberWrapper,
    MemberTitle,
    MemberPara,
    MemberInfoWrapper,
    MemberList,
    MemberItemWrapper
} from './MemberElements'
import MemberItem from './MemberItem/index'
import { memberSilver,memberGold,memberPlatium } from './MemberItem/MemberData'

const Member = () => {
    return (
        <MemberContainer id="member">
            <MemberWrapper>
                <MemberTitle>
                    MEMBER VIP
                </MemberTitle>
                <MemberPara>
                    Let's choose the package that is best for you and explore it happily and cheerfully.
                </MemberPara>
                <MemberInfoWrapper>
                    <MemberList>
                        <MemberItemWrapper>
                            <MemberItem
                                incentiveArray={memberSilver.incentiveArraySilver}
                                imgPath={memberSilver.imgPath}
                                colorTheme={memberSilver.colorTheme}
                                typeMember={memberSilver.typeMember}
                                minPoint={memberSilver.minPoint}
                            />
                        </MemberItemWrapper>
                        <MemberItemWrapper>
                            <MemberItem
                                incentiveArray={memberGold.incentiveArrayGold}
                                imgPath={memberGold.imgPath}
                                colorTheme={memberGold.colorTheme}
                                typeMember={memberGold.typeMember}
                                minPoint={memberGold.minPoint}
                            />
                        </MemberItemWrapper>
                        <MemberItemWrapper>
                            <MemberItem
                                incentiveArray={memberPlatium.incentiveArrayPlatium}
                                imgPath={memberPlatium.imgPath}
                                colorTheme={memberPlatium.colorTheme}
                                typeMember={memberPlatium.typeMember}
                                minPoint={memberPlatium.minPoint}
                            />
                        </MemberItemWrapper>
                    </MemberList>
                </MemberInfoWrapper>
            </MemberWrapper>
        </MemberContainer>
    )
}

export default Member