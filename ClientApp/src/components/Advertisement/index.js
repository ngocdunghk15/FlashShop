import React from 'react'
import {
    AdsContainer,
    AdsWrapper,
    AdsTitle,
    AdsPara,
    AdsListImg,
    AdsItemWrapper,
    AdsImg,
    AdsItemWrapText,
    AdsItemTitle,
    AdsItemText,
    AdsSponsorsWrapper,
    AdsSponsorsImg
} from './AdsElements'

const Advertisement = () => {
    return (
        <AdsContainer>
            <AdsWrapper>
                <AdsTitle>
                    ADVERTISEMENT
                </AdsTitle>
                <AdsPara>
                    See FLSHOP everywhere to make it easier for you when you move locations.
                </AdsPara>
                <AdsListImg>
                    <AdsItemWrapper>
                        <AdsImg loading='lazy' src={require('../../images/ads-red.svg').default} />
                        <AdsItemWrapText>
                            <AdsItemTitle light>
                                Incentives+
                            </AdsItemTitle>
                            <AdsItemText light>
                                Hundereds of gifts and vouchers wait for you !
                            </AdsItemText>
                        </AdsItemWrapText>
                    </AdsItemWrapper>
                    <AdsItemWrapper>
                        <AdsImg loading='lazy' src={require('../../images/ads-white.svg').default} />
                        <AdsItemWrapText>
                            <AdsItemTitle dark>
                                Transport+
                            </AdsItemTitle>
                            <AdsItemText dark>
                                Free and Flash Transport everywhere in VIETNAM !
                            </AdsItemText>
                        </AdsItemWrapText>
                    </AdsItemWrapper>
                </AdsListImg>
                <AdsSponsorsWrapper>
                    <AdsSponsorsImg loading='lazy' src={require('../../images/sponsored.svg').default} />
                </AdsSponsorsWrapper>
            </AdsWrapper>
        </AdsContainer>
    )
}

export default Advertisement