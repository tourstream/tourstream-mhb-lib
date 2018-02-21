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
  lazyLoad: true,
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
      width: 1.3rem;
      height: 1.5rem;
      margin: 0 .1rem;
      
      button {
        height: 1.5rem;
        width: 1.5rem;
        vertical-align: middle;
        &:before {
          font-size: 1rem;
          opacity: 1;
          color: ${props => props.theme.teaserSliderDotColor || 'white'};
          width: 1.5rem;
          height: 1.5rem;
          text-align: center;
          vertical-align: middle;
          line-height: 1.5rem;
          
          font-family: "icomoon";
          content: "\\e910"; 
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
          font-size: 1.3rem;
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
    
    padding: 0 5rem;
    
    .caption-wrapper {
      position: absolute;
      left: 5rem;
      right: 5rem;
      bottom: ${props => 30 / props.theme.baseFontSize}rem;
    }

    .caption-header {
      font-size: 24px;
      font-weight: 500;
      text-transform: uppercase
    }
    
    .caption-body {
      font-size: 16px;
    }
    
    @media (min-width: 576px) {  }
    @media (min-width: 768px) {  
      .caption-header, .caption-body {
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
                  <div className="caption-wrapper">
                    {Object.prototype.hasOwnProperty.call(media[key], 'header') &&
                    <div className="caption-header" dangerouslySetInnerHTML={{ __html: media[key].header }} />
                    }
                    {Object.prototype.hasOwnProperty.call(media[key], 'body') &&
                    <div className="caption-body" dangerouslySetInnerHTML={{ __html: media[key].body }} />
                    }
                  </div>
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
