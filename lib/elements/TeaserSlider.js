import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const imageSliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: false,
}

const StyledSlider = styled.div`
  position: relative;
  
  .slick-track {
    height: ${props => 300 / props.theme.baseFontSize}rem;
    @media (min-width: 576px) { height: ${props => 420 / props.theme.baseFontSize}rem; }
    @media (min-width: 768px) { height: ${props => 420 / props.theme.baseFontSize}rem; }
    @media (min-width: 992px) { height: ${props => 560 / props.theme.baseFontSize}rem; }
    @media (min-width: 1200px) { height: ${props => 800 / props.theme.baseFontSize}rem; }
  }
  
  .slick-arrow {
    z-index: 100;
    &.slick-prev {
      left: 1rem;
    }
    &.slick-next {
      right: 1rem;
    }
    &.slick-prev, &.slick-next {
      width: 3rem;
      height: 3rem;
      &:before {
        color: ${props => props.theme.teaserSliderArrowColor || 'white'};
        font-size: 3rem;
        line-height: 3rem;
        text-align: center;
        vertical-align: middle;        

      }
    }
    &.slick-prev {
      &:before {
        font-family: "icomoon";
        content: "\\e902"; 
      }
    }
    &.slick-next {
      &:before {
        font-family: "icomoon";
        content: "\\e903"; 
      }
    }
  }
  
  .slick-dots {
    li {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 .5rem;
      
      button {
        &:before {
          opacity: 1;
          color: ${props => props.theme.teaserSliderDotColor || 'white'};
          width: 1.5rem;
          height: 1.5rem;
          text-align: center;
          vertical-align: bottom;
          line-height: 1.6rem;
          
          border-style: solid;
          border-color: ${props => props.theme.teaserSliderColor || 'white'};
          border-width: 0.08rem;
          border-radius: 50%;

          _font-family: "icomoon";
          _content: "\\e910"; 
        }
        &:hover {
          &:before {
            color: ${props => props.theme.teaserSliderDotHoverColor || 'white'};
          }
        }
      }
      
      &.slick-active {
        button:before {
          opacity: 1;
          color: ${props => props.theme.teaserSliderDotActiveColor || 'white'};
        }
      }
    }
  }
`

const SliderElement = styled.figure`
  margin: 0;
  padding: 0;
  position: relative;
  

  background-image: url(${props => `${props.image}_small-min.jpg` || ''});
  @media (min-width: 768px) {
    background-image: url(${props => `${props.image}_medium-min.jpg` || ''});
  }
  @media (min-width: 1200px) {
    background-image: url(${props => `${props.image}-min.jpg` || ''});
  }
  
  background-position: center;
  background-size: cover;
  
  figcaption {
    display: none;
    position: absolute;
    top: 0; 
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    
    color: ${props => props.theme.teaserSliderFontColor};
    background: ${props => props.theme.teaserSliderBackgroundColor};
    
    padding-top: ${props => 0 / props.theme.baseFontSize}rem;
    
    @media (min-width: 576px) { padding-top: ${props => 0 / props.theme.baseFontSize}rem; }
    @media (min-width: 768px) { padding-top: ${props => 200 / props.theme.baseFontSize}rem; }
    @media (min-width: 992px) { padding-top: ${props => 360 / props.theme.baseFontSize}rem; }
    @media (min-width: 1200px) { padding-top: ${props => 600 / props.theme.baseFontSize}rem; }

    
    padding-left: 5rem;
    padding-right: 5rem;
    
    .teaser-header, .teaser-body {
      display: none;
    }

    .teaser-header {
      font-size: 24px;
      font-weight: 500;
      text-transform: uppercase
    }
    
    .teaser-body {
      font-size: 16px;
    }
    
    @media (min-width: 576px) {  }
    @media (min-width: 768px) {  
      .teaser-header, .teaser-body {
        display: block;
      }
    }

  }
    @media (min-width: 576px) {  }
    @media (min-width: 768px) {  
      figcaption {
        display: block;
      }
    }
`


class TeaserSlider extends Component {
  render () {
    const { media } = this.props
    if (!media || !media.length) {
      return null
    }

    return (
      <div>
        <StyledSlider>
          <Slider {...imageSliderSettings}>
            {Object.keys(media).map(key => (
              <SliderElement image={media[key].image} key={key}>
                <figcaption>
                  {Object.prototype.hasOwnProperty.call(media[key], 'header') &&
                  <div className="teaser-header" dangerouslySetInnerHTML={{ __html: media[key].header }} />
                  }
                  {Object.prototype.hasOwnProperty.call(media[key], 'body') &&
                  <div className="teaser-body" dangerouslySetInnerHTML={{ __html: media[key].body }} />
                  }
                </figcaption>
              </SliderElement>
            ))
            }
          </Slider>
        </StyledSlider>
      </div>
    )
  }
}

export default TeaserSlider
