import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Local import
import './TopComment.css';
import {
  TopCmtContainer,
  TopCmtWrapper,
  TopCmtTitle,
  TopCmtPara,
  TopCmtList
} from './TopCommentElements';
import CommentItem from './Comment/CommentItem'
import { dataComment } from './Comment/DataComment';

const TopComments = () => {
  const optionsCarousel = {
    loop: true,
    margin: 40,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1160: {
        items: 3,
      }
    }
  }
  return (
    <TopCmtContainer>
      <TopCmtWrapper>
        <TopCmtTitle>Trusted by  Happy Customers</TopCmtTitle>
        <TopCmtPara>
          These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
        </TopCmtPara>
        <TopCmtList>
          <OwlCarousel
            className='owl-theme'
            {...optionsCarousel}
          >
            {dataComment.map((item, index) => {
              return (
                <CommentItem
                  className="item"
                  key={index}
                  userRate={item.userRate}
                  userSex={item.userSex}
                  userName={item.userName}
                  userAvatar={item.userAvatar}
                  userComment={item.userComment}
                  userCountry={item.userCountry}
                />
              )
            })}
          </OwlCarousel>
        </TopCmtList>
      </TopCmtWrapper>
    </TopCmtContainer>
  )
}

export default TopComments