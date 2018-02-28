import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const imageSliderSettings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: true,
  centerMode: true,
  centerPadding: '180px',
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        centerPadding: '120px',
      },
    },
    {
      breakpoint: 993,
      settings: {
        centerPadding: '0px',
      },
    },
    {
      breakpoint: 769,
      settings: {
        centerPadding: '0px',
      },
    },
    {
      breakpoint: 577,
      settings: {
        centerPadding: '0px',
      },
    },
  ],
}

const StyledSlider = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding: 0;
  width: 100%;
  
  .slick-arrow {
    z-index: 100;
    &.slick-prev {
      left: 1rem;
    }
    &.slick-next {
      right: 1rem;
    }
    &.slick-prev, &.slick-next {
      width: 5rem;
      height: 5rem;
      &:before {
        color: ${props => props.theme.teaserSliderArrowColor || 'white'};
        font-size: 5rem;
        line-height: 5rem;
        text-align: center;
        vertical-align: middle;        
        font-weight: 200;
        font-family: "icomoon";
      }
    }
    &.slick-prev {
      &:before {
        content: "\\e902"; 
      }
    }
    &.slick-next {
      &:before {
        content: "\\e903"; 
      }
    }
  }
  
  .slick-dots {
    li {
      width: 2.3rem;
      height: 1.5rem;
      margin: 0 .1rem;
      
      button {
        height: 1.5rem;
        width: 1.5rem;
        vertical-align: middle;
        &:before {
          font-size: 1.5rem;
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
          font-size: 1.75rem;
        }
      }
    }
  }
`

const SliderElement = styled.div`
`
const StyledFigure = styled.figure`
  display: block;
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
  
  width: auto;
  height: ${props => 200 / props.theme.baseFontSize}rem;
  @media (min-width: 576px) { height: ${props => 300 / props.theme.baseFontSize}rem; margin: 0; }
  @media (min-width: 768px) { height: ${props => 350 / props.theme.baseFontSize}rem; margin: 0px; }
  @media (min-width: 992px) { height: ${props => 450 / props.theme.baseFontSize}rem; margin: 30px; }
  @media (min-width: 1200px) { height: ${props => 500 / props.theme.baseFontSize}rem; margin: 60px; }
  @media (min-width: 1900px) { height: ${props => 600 / props.theme.baseFontSize}rem; }
  
  background-position: center;
  background-size: cover;
`

class GallerySlider extends Component {
  render () {
    const { media } = this.props
    if (!media || !media.length) {
      return null
    }

    return (
      <div> {/* DO NOT REMOVE THIS DIV! The component will crash! */}
        <StyledSlider>
          <Slider {...imageSliderSettings} className={'center'}>
            {Object.keys(media).map(key => (
              <SliderElement key={key}>
                <StyledFigure image={media[key].image} />
              </SliderElement>
            ))
            }
          </Slider>
        </StyledSlider>
      </div>
    )
  }
}

export default GallerySlider
