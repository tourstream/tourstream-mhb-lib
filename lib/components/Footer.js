import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import styled from 'styled-components'
import { translate } from 'react-i18next'

const FooterWrapper = styled.footer`
  width: 100%;
  height: ${props => 200 / props.theme.baseFontSize}rem;
  bottom: 0;
  background-color: ${props => props.theme.background_color};
  font-color: ${props => props.theme.background_font_color};
  
  .container {
      height: ${props => 200 / props.theme.baseFontSize}rem;
      display: grid;
      display: -ms-grid;
      grid-template-rows: repeat(6, 1fr);
      -ms-grid-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: repeat(12, 1fr);
      -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`

const Logo = styled.div`
  grid-row: 3 / span 2;
  -ms-grid-row: 3;
  -ms-grid-row-span: 2;
  
  grid-column: 1 / span 2;
  -ms-grid-column: 1;
  -ms-grid-column-span: 2;
  
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`

const Copyright = styled.div`
  grid-row: 5 / span 2;
  -ms-grid-row: 5;
  -ms-grid-row-span: 2;
  
  grid-column: 1 / span 12;
  -ms-grid-column: 1;
  -ms-grid-column-span: 12;
  
  white-space: nowrap;
  color: white;
  text-align: center;
  position: relative;
  
  img {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    height: 1rem;  }
`

const FooterLinks = styled.div`
  grid-row: 2 / span 3;
  -ms-grid-row: 2;
  -ms-grid-row-span: 3;
  
  grid-column: 1 / span 12;
  -ms-grid-column: 1;
  -ms-grid-column-span: 12;
  
  white-space: nowrap;
  text-align: center;
  
  @media (min-width: 576px) {
    text-align: right;
    grid-row: 3 / span 2;
    -ms-grid-row: 3;
    -ms-grid-row-span: 2;

    grid-column: 3 / span 10;
    -ms-grid-column: 3;
    -ms-grid-column-span: 10;
  }
  
  a {
    color: white;
    margin-right: 1rem;
    display: block;
    padding-bottom:0.2rem;
    
    @media (min-width: 576px) {
      display: inline-block;
    }
  }
`

class Footer extends Component {
  render () {
    const { t } = this.props

    return (
      <FooterWrapper>
        <div className="container">
      Test
          <Logo>
            <LazyLoad><img src={t('footer.logo')} alt="{t('footer.logo.alt')}" /></LazyLoad>
          </Logo>
          <Copyright>
            {t('footer.followUs')}
            <LazyLoad>
              <a href={t('footer.link.facebook')}><img src="/images/instagram.svg" alt="Instagram" /></a>
            </LazyLoad>
            {t('footer.and')}
            <LazyLoad>
              <a href={t('footer.link.facebook')}><img src="/images/facebook.svg" alt="Facebook" /></a>
            </LazyLoad>
            <br />{t('footer.copyright')}
          </Copyright>
          <FooterLinks>
            <Link to={t('footer.link.jobs.text')}>{t('footer.link.jobs.text')}</Link>
            <Link to={t('footer.link.jobs.contact')}>{t('footer.link.contact.text')}</Link>
            <Link to={t('footer.link.jobs.imprint')}>{t('footer.link.imprint.text')}</Link>
            <Link to={t('footer.link.jobs.privacy')}>{t('footer.link.privacy.text')}</Link>
          </FooterLinks>
        </div>
      </FooterWrapper>
    )
  }
}

export default translate()(Footer)
