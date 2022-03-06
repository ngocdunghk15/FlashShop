import React from 'react'
import './FooterStyle.css'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { TiLocationOutline } from 'react-icons/ti'
import { FiPhone } from 'react-icons/fi'
const Footer = () => {
    return (
        <div className="footer">
            <div className="col-fourth footer__col--first">
                <div className="footer__logo">
                    <h2 className="brand-name">FLSHOP</h2>
                </div>
                <p>
                    FLSHOP is shopping platform that has unique features and has high security.
                </p>
                <div className="footer__contact">
                    <span className="footer__contact-gmail">
                        <AiOutlineMail className="icon-send" />
                        <a href="mailto:ngocdunghk15@gmail.com">flshop@vnu.edu.vn</a>
                    </span>
                    <span className="footer__contact-phone">
                        <FiPhone className="icon-send" />
                        <a href="tel:+84399015298">+84399015298</a>
                    </span>
                    <span className="footer__contact-location">
                        <TiLocationOutline className="icon-send" />
                        E3, 144 Xuan Thuy, Cau Giay, Ha Noi
                    </span>
                </div>
            </div>
            <div className="col-fourth footer__col--second">
                <h2>Our Recent Upgrade</h2>
                <p>
                    Lao Cai, Viet Nam
                </p>
                <span>December 25, 2021</span>
                <p>
                    Quang Ninh, Viet Nam
                </p>
                <span>October 25, 2019</span>
                <p>
                    New Year, New Resolutions!
                </p>
                <span>September 21, 2019</span>
            </div>
            <div className="col-fourth footer__col--third">
                <h2>Subscribe to our Newsletter</h2>
                <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
                <form action="">
                    <div className="footer__send">
                        <div className="footer__send-username">
                            <AiOutlineUser className="icon-send" />
                            <input type="text" placeholder="Username" required />
                        </div>
                        <div className="footer__send-email">
                            <AiOutlineMail className="icon-send" />
                            <input type="email" placeholder="Email" required />
                        </div>
                        <button className="btn btn-danger btn--subscribe">SUBSCRIBE</button>

                    </div>
                </form>
            </div>

            <div className="col-fourth footer__col--fourth">
                <h2>Our Instagram</h2>
                <p>Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</p>
            </div>
            <div className="page-powered">
                <p>Powered by @</p>
                <a href="https://www.facebook.com/profile.php?id=100006444932422" target="_blank">flshop.vnu.edu.vn</a>
            </div>
        </div>
    )
}

export default Footer
