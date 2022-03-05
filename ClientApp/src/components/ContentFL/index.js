import React from 'react'

import {
    ContentContainer,
    ContentWrapper,
    ContentImgWrap,
    ContentImg,
    ContentTextWrap,
    ContentTextTitle,
    ContentTextPara,
    ContentList,
    ContentItem,
    ContentIcon,
    ContentItemText
} from './ContentElements'

const Content = () => {
    return (
        <>
            <ContentContainer id="incentives">
                <ContentWrapper>
                    <ContentImgWrap>
                        <ContentImg src={require('../../images/content-bgr.svg').default} />
                    </ContentImgWrap>
                    <ContentTextWrap>
                        <ContentTextTitle>
                            We Provide Many Features You Can Use
                        </ContentTextTitle>
                        <ContentTextPara>
                            You can explore the features that we provide with fun and have their own functions each feature.
                        </ContentTextPara>
                        <ContentList>
                            <ContentItem>
                                <ContentIcon src={require('../../images/checked.svg').default} />
                                <ContentItemText>
                                    Powerfull online protection.
                                </ContentItemText>
                            </ContentItem>
                            <ContentItem>
                                <ContentIcon src={require('../../images/checked.svg').default} />
                                <ContentItemText>
                                    Everywhere & Everytime.
                                </ContentItemText>
                            </ContentItem>
                            <ContentItem>
                                <ContentIcon src={require('../../images/checked.svg').default} />
                                <ContentItemText>
                                    Flash transport.
                                </ContentItemText>
                            </ContentItem>
                            <ContentItem>
                                <ContentIcon src={require('../../images/checked.svg').default} />
                                <ContentItemText>
                                    Lots of attractive incentives.
                                </ContentItemText>
                            </ContentItem>
                            <ContentItem>
                                <ContentIcon src={require('../../images/checked.svg').default} />
                                <ContentItemText>
                                    No specific time limits.
                                </ContentItemText>
                            </ContentItem>
                            <ContentItem>
                                <ContentIcon src={require('../../images/checked.svg').default} />
                                <ContentItemText>
                                    Gifts for vip member.
                                </ContentItemText>
                            </ContentItem>
                        </ContentList>
                    </ContentTextWrap>
                </ContentWrapper>
            </ContentContainer>
        </>
    )
}

export default Content
