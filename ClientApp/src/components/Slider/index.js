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
    SliderBtnWrap,
    SliderInfoWrap,
    SliderInfoList,
    SliderInfoItemWrap,
    SliderInfoItem,
    SliderInfoImg,
    SliderInfoTextWrap,
    SliderInfoData,
    SliderInfoType

} from './SliderElements'
const Slider = () => {
    return (
        <SliderContainer>
            <SliderWrapper>
                <SliderTextWrap>
                    <SliderH1>
                        Want anything to be easy with
                        <SLiderH1Strong>
                            FLShop
                        </SLiderH1Strong>
                    </SliderH1>
                    <SliderPara>
                        Provide a platform for all your needs with ease and fun using FLShop discover interesting features from us.
                    </SliderPara>
                    <SliderBtnWrap>
                        <SliderBtn to="/products">
                            Let's move into Shop
                        </SliderBtn>
                    </SliderBtnWrap>
                </SliderTextWrap>
                <SliderImgWrap>
                    <SliderImg loading='lazy' src={require('../../images/slider-bgr.svg').default} />
                </SliderImgWrap>
                <SliderInfoWrap>
                    <SliderInfoList>
                        <SliderInfoItemWrap>
                            <SliderInfoItem>
                                <SliderInfoImg loading='lazy' src={require('../../images/user.svg').default} />
                                <SliderInfoTextWrap>
                                    <SliderInfoData>
                                        90+
                                    </SliderInfoData>
                                    <SliderInfoType>
                                        Users
                                    </SliderInfoType>
                                </SliderInfoTextWrap>
                            </SliderInfoItem>
                        </SliderInfoItemWrap>
                        <SliderInfoItemWrap>
                            <SliderInfoItem>
                                <SliderInfoImg loading='lazy' src={require('../../images/location.svg').default} />
                                <SliderInfoTextWrap>
                                    <SliderInfoData>
                                        5+
                                    </SliderInfoData>
                                    <SliderInfoType>
                                        Locations
                                    </SliderInfoType>
                                </SliderInfoTextWrap>
                            </SliderInfoItem>
                        </SliderInfoItemWrap>
                        <SliderInfoItemWrap>
                            <SliderInfoItem>
                                <SliderInfoImg loading='lazy' src={require('../../images/erver.svg').default} />
                                <SliderInfoTextWrap>
                                    <SliderInfoData>
                                        12+
                                    </SliderInfoData>
                                    <SliderInfoType>
                                        Standard
                                    </SliderInfoType>
                                </SliderInfoTextWrap>
                            </SliderInfoItem>
                        </SliderInfoItemWrap>
                    </SliderInfoList>
                </SliderInfoWrap>
            </SliderWrapper>
        </SliderContainer>
    )
}

export default Slider
