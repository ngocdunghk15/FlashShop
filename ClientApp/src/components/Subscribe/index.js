import React from 'react'
import {
    SubscribeContainer,
    SubscribeWrapper,
    SubscribeTextWrap,
    SubscribeTitle,
    SubscribePara,
    SubscribeButton
} from './SubscribeElements'

const Subscribe = () => {
    return (
        <SubscribeContainer>
            <SubscribeWrapper>
                <SubscribeTextWrap>
                    <SubscribeTitle>
                        Subscribe Now for Get Special Features!
                    </SubscribeTitle>
                    <SubscribePara>
                        Let's subscribe with us and find the fun.
                    </SubscribePara>
                </SubscribeTextWrap>
                <SubscribeButton to="/signin">
                    Subscribe Now
                </SubscribeButton>
            </SubscribeWrapper>
        </SubscribeContainer>
    )
}

export default Subscribe