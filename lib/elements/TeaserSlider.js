import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { clearFix } from 'polished'

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
    @media (min-width: 576px) { height: ${props => 500 / props.theme.baseFontSize}rem; }
    @media (min-width: 768px) { height: ${props => 500 / props.theme.baseFontSize}rem; }
    @media (min-width: 992px) { height: ${props => 500 / props.theme.baseFontSize}rem; }
    @media (min-width: 1200px) { height: ${props => 500 / props.theme.baseFontSize}rem; }
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
    
    padding-top: ${props => 300 / props.theme.baseFontSize}rem;
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
  constructor () {
    super()
  }

  render () {
    //const { media } = this.props
    const media = [
      {
        'image': '/images/header_riviera_01',
        'header': 'Any Time, Any Place, Exellence',
        'body': '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>',
        'url': '',
      },
      {
        'image': '/images/header_riviera_02',
        'header': 'Any Time, Any Place, Exellence',
        'body': '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>',
        'url': '',
      },
      {
        'image': '/images/header_riviera_05',
        'header': 'Any Time, Any Place, Exellence',
        'body': '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>',
        'url': '',
      },
      {
        'image': '/images/header_riviera_06',
        'header': 'Any Time, Any Place, Exellence',
        'body': '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>',
        'url': '',
      },
      {
        'image': '/images/header_riviera_07',
        'header': 'Any Time, Any Place, Exellence',
        'body': '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>',
        'url': '',
      },
    ]

    if (!media || !media.length) {
      return null
    }

    return (
      <div>
        <StyledSlider>
          <Slider {...imageSliderSettings}>
            {Object.keys(media).map(key => {
              return (
                <SliderElement image={media[key].image} key={key}>
                  <figcaption>
                    {media[key].hasOwnProperty('header') &&
                      <div className="teaser-header" dangerouslySetInnerHTML={{ __html: media[key].header }} />
                    }
                    {media[key].hasOwnProperty('body') &&
                      <div className="teaser-body" dangerouslySetInnerHTML={{ __html: media[key].body }} />
                    }
                  </figcaption>
                </SliderElement>
              )
            })}
          </Slider>
        </StyledSlider>
      </div>
    )
  }
}

export default TeaserSlider
