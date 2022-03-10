import React from 'react'

import {
    CommentContainer,
    CommentWrapper,
    CommentInfo,
    CommentInfoLeft,
    CommentUserAvatar,
    CommentUserInfo,
    CommentUserName,
    CommentUserCountry,
    CommentInfoRate,
    CommentRateIcon,
    CommentContent
} from './CommentItemElements'

const CommentItem = ({ userAvatar, userSex, userName, userCountry, userRate, userComment }) => {
    return (
        <CommentContainer>
            <CommentWrapper>
                <CommentInfo>
                    <CommentInfoLeft>
                        <CommentUserAvatar loading='lazy' src={userAvatar} />
                        <CommentUserInfo>
                            <CommentUserName>
                                {userName}
                            </CommentUserName>
                            <CommentUserCountry>
                                {userCountry}
                            </CommentUserCountry>
                        </CommentUserInfo>
                    </CommentInfoLeft>
                    <CommentInfoRate>
                        {userRate}
                        <CommentRateIcon loading='lazy' src={require('../../../images/rate-icon.svg').default} />
                    </CommentInfoRate>
                </CommentInfo>
                <CommentContent>
                    {`"${userComment}"`}
                </CommentContent>
            </CommentWrapper>
        </CommentContainer>
    )
}

export default CommentItem