import React from 'react'
import {
    SliderContainer,
    SliderWrapper,
    SliderH1,
    SliderPara,
    SliderTextWrap,
    SLiderH1Strong,
    SliderBtn,
    SliderImgWrap,
    SliderImg,
    SliderBtnWrap
} from './SliderElements'
const Slider = () => {
    return (
        <SliderContainer>
            <SliderWrapper>
                <SliderTextWrap>
                    <SliderH1>
                        Want anything to be easy with 
                        <SLiderH1Strong>
                            FLShop.
                        </SLiderH1Strong>
                    </SliderH1>
                    <SliderPara>
                        Provide a platform for all your needs with ease and fun using FLShop discover interesting features from us.
                    </SliderPara>
                    <SliderBtnWrap>
                        <SliderBtn to="/products">
                            Let's move on Shop
                        </SliderBtn>
                    </SliderBtnWrap>
                </SliderTextWrap>
                <SliderImgWrap>
                    <SliderImg src={require('../../images/slider-img.png').default}/>
                </SliderImgWrap>
            </SliderWrapper>
        </SliderContainer>
    )
}

export default Slider
