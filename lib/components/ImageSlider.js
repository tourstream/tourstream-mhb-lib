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

    return (
      <Slider {...imageSliderSettings}>
        <SliderElement image={t('header.slider.image01')} />
        <SliderElement image={t('header.slider.image02')} />
        <SliderElement image={t('header.slider.image03')} />
        <SliderElement image={t('header.slider.image04')} />
        <SliderElement image={t('header.slider.image05')} />
      </Slider>
    )
  }
}

export default translate()(ImageSlider)
