import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { translate } from 'react-i18next'

const imageSliderSettings = {
  dots: true,
  infinite: true,
  speed: 3000,
  autoplay: 15000,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  lazyLoad: true,
}

const SliderElement = styled.div`
  background-image: url(${props => `${props.image}_small-min.jpg` || ''});
  @media (min-width: 768px) {
    background-image: url(${props => `${props.image}_medium-min.jpg` || ''});
  }
  @media (min-width: 1200px) {
    background-image: url(${props => `${props.image}-min.jpg` || ''});
  }
  
  background-position: center;
  background-size: cover;
`

class ImageSlider extends Component {
  render () {
    const { t } = this.props
    const images = t('header.slider.images').split('\n')

    return (
      <Slider {...imageSliderSettings}>
        {Object.keys(images).map(key => <SliderElement image={images[key]} key={key} />)}
      </Slider>
    )
  }
}

export default translate()(ImageSlider)
