import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import styled, { withTheme } from 'styled-components'
import { translate } from 'react-i18next'
import { clearFix } from 'polished'

const FooterWrapper = styled.footer`
  font-size: ${props => props.theme.get('footerFontSize') || '16px'};
  @media (min-width: 1200px) {
    font-size: ${props => props.theme.get('baseFontSize')*1.5}px || '24px';
  }
  background-color: ${props => props.theme.get('footerBackgroundColor') || 'rgb(41, 102, 153)'};
  color: ${props => props.theme.get('footerTextColor') || 'white'};
  width: 100%;
  bottom: 0;
  overflow: auto;
  padding: 10px;

  .center {
    text-align: center
  }
  
  a {
    color: ${props => props.theme.get('footerLinkColor') || 'white'};
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  
  .header {
    margin-bottom: 10px;
  }
`

const FooterSocialLinks = styled.div `
  padding: 8px 8px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
  ul {
    margin: 0;
    padding: 0;
    ${clearFix()}
    display: inline-block;
    list-style: none;
    li {
      float: left;
      margin-left: 35px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  a {
  }
  img {
    height: ${props => 30 / props.theme.get('baseFontSize')}rem;
    width: ${props => 30 / props.theme.get('baseFontSize')}rem;
  }
  
  .social-link {
    margin: 0;
    padding: 0;
    display: inline-block;
    font-family: "icomoon";
    text-rendering: auto;
    text-align: center;
    vertical-align: middle;
    font-size: ${props => 30 / props.theme.get('baseFontSize')}rem;
    width: ${props => 30 / props.theme.get('baseFontSize')}rem;
    height: ${props => 30 / props.theme.get('baseFontSize')}rem;

    &.social-link-instagram::before {
      content: "\\e905"; 
    }
    &.social-link-facebook::before {
      content: "\\e904"; 
    }
  }
`

const FooterCopyright = styled.div`
  padding: 8px 8px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
`

const FooterLinks = styled.ul`
  display: inline-block;
  padding: 0;
  margin-top: 30px;
  margin-bottom: 10px;
  list-style: none;
  ${clearFix()}
  li {
    float: left;
  }
  
  a {
    display: block;
    padding: 0.5rem 1rem;
    white-space: nowrap;
    text-align: center;
  }
`

const FooterBrandLogos = styled.div`
  display: block;
  width: auto;
  text-align: center;
  ${clearFix()}
  margin-top: 30px;
  margin-bottom: 10px;
  figure {
    text-align: center;
    display: inline-block;
    margin: 0 0 10px 0;
    padding: 0;
    img, .img {
      display: inline-block;
      height: 75px;
      margin: 0;
      padding: 0;
    }
    figcaption {
      font-size: 18px;
    }
    a {
      display: block;
      text-decoration: none;
      cursor: pointer;
      padding: 0 20px;
      &:hover {
        text-decoration: none;
      }
    }
  }
  
  @media (min-width: 768px) {
    display: inline-block;
    width: 80%;
    figure {
      width: 25%;
    }
  }

`

class Footer extends Component {
  render () {
    const { t, i18n, theme } = this.props

    const copyrightYear = new Date().getFullYear()

    return (
      <div className="container">
        <FooterWrapper>
          <div className="row">
            <div className="center">
              <FooterLinks>
                <li><Link to={`/${i18n.language + t('link.jobs.url')}`}>{t('link.jobs.text')}</Link></li>
                <li><Link to={`/${i18n.language + t('link.contact.url')}`}>{t('link.contact.text')}</Link></li>
                <li><Link to={`/${i18n.language + t('link.imprint.url')}`}>{t('link.imprint.text')}</Link></li>
                <li><Link to={`/${i18n.language + t('link.privacy.url')}`}>{t('link.privacy.text')}</Link></li>
              </FooterLinks>
            </div>
          </div>
          <div className="row">
            <div className="center">
              <FooterBrandLogos>
                { /** <div className="header">{t('footer.brands.title')}</div> */ }
                <figure>
                  <a href={t('footer.brands.logo.labranda.url')}>
                    <LazyLoad><img src={theme.get('footerBrandLogoLabranda')} alt={t('footer.brands.logo.labranda.alt')} /></LazyLoad>
                    <figcaption>
                      {t('footer.brands.logo.labranda.caption')}
                    </figcaption>
                  </a>
                </figure>
                <figure>
                  <a href={t('footer.brands.logo.designplus.url')}>
                    <LazyLoad><img src={theme.get('footerBrandLogoDesignPlus')} alt={t('footer.brands.logo.designplus.alt')} /></LazyLoad>
                    <figcaption>
                      {t('footer.brands.logo.designplus.caption')}
                    </figcaption>
                  </a>
                </figure>
                <figure>
                  <a href={t('footer.brands.logo.kairaba.url')}>
                    <LazyLoad><img src={theme.get('footerBrandLogoKairaba')} alt={t('footer.brands.logo.kairaba.alt')} /></LazyLoad>
                    <figcaption>
                      {t('footer.brands.logo.kairaba.caption')}
                    </figcaption>
                  </a>
                </figure>
              </FooterBrandLogos>
            </div>
          </div>
          <div className="row">
            <FooterSocialLinks>
              <div className="header">{t('footer.sociallinks.title')}</div>
              {/*
                <ul>
                <li>
                <LazyLoad>
                <a href={t('link.instagram')}>
                <img src="/shared/images/icons/instagram.svg" alt="Instagram" />
                </a>
                </LazyLoad>
                </li>
                <li>
                <LazyLoad>
                <a href={t('link.facebook')}>
                <img src="/shared/images/icons/facebook.svg" alt="Facebook" />
                </a>
                </LazyLoad>
                </li>
                </ul>
              */}
              <ul>
                <li>
                  <a className="social-link social-link-instagram" href={t('link.instagram')} />
                </li>
                <li>
                  <a className="social-link social-link-facebook" href={t('link.facebook')} />
                </li>
              </ul>
            </FooterSocialLinks>
          </div>
          <div className="row">
            <div className="center">
              <FooterCopyright>
                {t('footer.copyright', { year: copyrightYear })}
              </FooterCopyright>
            </div>
          </div>
        </FooterWrapper>
      </div>
    )
  }
}

export default translate()(withTheme(Footer))
