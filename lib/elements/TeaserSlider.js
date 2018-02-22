import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const imageSliderSettings = {
  dots: true,
  infinite: true,
  speed: 2000,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  lazyLoad: true,
}

const StyledSlider = styled.div`
  position: relative;
  
  .slick-track {
    height: ${props => 200 / props.theme.baseFontSize}rem;
    @media (min-width: 576px) { height: ${props => 300 / props.theme.baseFontSize}rem; }
    @media (min-width: 768px) { height: ${props => 350 / props.theme.baseFontSize}rem; }
    @media (min-width: 992px) { height: ${props => 450 / props.theme.baseFontSize}rem; }
    @media (min-width: 1200px) { height: ${props => 550 / props.theme.baseFontSize}rem; }
    @media (min-width: 1900px) { height: ${props => 650 / props.theme.baseFontSize}rem; }
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
    width: 100%;
    height: 100%;
    
    align-items: center;
    justify-content: center;
  
    padding: 0 5rem;
    
    .caption-wrapper {
      flex: none;
      color: ${props => props.theme.teaserSliderFontColor};
      background: ${props => props.theme.teaserSliderBackgroundColor};
      padding: 1.5rem 3rem;
    }

    .caption-header {
      font-family: ${props => props.theme.headlineFontFamily};
      font-size: ${props => 32 / props.theme.baseFontSize}rem;
      @media (min-width: 992px) { font-size: ${props => 42 / props.theme.baseFontSize}rem; }
    }
    
    .caption-body {
      font-size: ${props => 18 / props.theme.baseFontSize}rem;
    }
  }
    @media (min-width: 576px) {  }
    @media (min-width: 768px) {  
      figcaption {
        display: flex;
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
                {(media[key].header || media[key].body) &&
                <figcaption>
                  <div className="caption-wrapper">
                    {media[key].header &&
                    <div className="caption-header" dangerouslySetInnerHTML={{__html: media[key].header}} />
                    }
                    {media[key].body &&
                    <div className="caption-body" dangerouslySetInnerHTML={{__html: media[key].body}} />
                    }
                  </div>
                </figcaption>
                }
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
