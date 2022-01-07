import React from 'react'
import { FaGithub, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>© 2022 IndiAmPizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://twitter.com/AyyagariMadhu' targe="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="mailto:sitapataballa1312@gmail.com" targe="_blank" rel="noopener noreferrer">
                <FaGoogle />
              </SocialIconLink>

              <SocialIconLink href='https://www.linkedin.com/in/sita-pataballa-41963b206/' targe="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink href='https://github.com/sitap1312' targe="_blank"  rel="noopener noreferrer">
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
};

export default Footer;
