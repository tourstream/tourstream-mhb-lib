import React, { Component } from 'react'
import styled from 'styled-components'
import { clearFix } from 'polished'
import Lightbox from 'react-images'


const StyledCard = styled.div`
  ${clearFix()}
  padding: 0;
  margin: 0 0 20px 0;
  display: block;
  
  .card-header {
    color: ${props => props.theme.headline1Color};
    background-color: ${props => props.theme.headline1BackgroundColor};
    font-family: ${props => props.theme.headline1Font};
    height: 38px;
    width: auto;
    display: block;
    font-size: 28px;
    font-weight: 300;
    line-height: 38px;
    padding: 0;
    text-align: center;
    vertical-align: middle;
    h1, h2, h3, h4, h5 {
      padding: 0;
      margin: 0;
      font-size: 28px;
      font-weight: 300;
      line-height: 38px;
    }
  }
`

const StyledGallery = styled.div`
  .gallery-item {
    display: inline-block;
    width: 100%;
    a {
      display: block;
      padding: 0 1% 1% 1%;
    }
    figure {
      padding: 0;
      margin: 0;
      display: block;
      height: 250px;
      background-position: center center;
      background-size: cover;
    }
    
    @media (min-width: 400px) {
      figure {
        height: 350px;
      }
    }
    @media (min-width: 768px) {
      width: 50%;
      figure {
        height: 300px;
      }
    }
    @media (min-width: 992px) {
      figure {
        height: 400px;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem 1rem 2rem;
  }
`

class Gallery extends Component {
  constructor () {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox (index, event) {
    event.preventDefault()
    console.log('openLightbox', index)
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    })
  }
  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }
  renderGallery (images) {

    const gallery = images.map((obj, i) =>
      (
        <div key={`gallery-item-${i}`} className={'gallery-item'}><a
          href={obj.src}
          key={i}
          onClick={e => this.openLightbox(i, e)}
        >
          <figure style={{ backgroundImage: `url(${obj.thumbnail})` }} />
        </a>
        </div>
      )
    )

    return (
      <StyledGallery>
        {gallery}
      </StyledGallery>
    )
  }

  render () {
    const { header, media } = this.props

    const images = [
      { src: '/images/shutterstock_560973166.jpeg', thumbnail: '/images/shutterstock_560973166.jpeg' },
      { src: '/images/shutterstock_577455703.jpeg', thumbnail: '/images/shutterstock_577455703.jpeg' },
      { src: '/images/shutterstock_678253975.jpeg', thumbnail: '/images/shutterstock_678253975.jpeg' },
      { src: '/images/shutterstock_560973166.jpeg', thumbnail: '/images/shutterstock_560973166.jpeg' },
    ]


    return (
      <StyledCard class="card">
        <div className="card-header" dangerouslySetInnerHTML={{ __html: header }} />

        {this.renderGallery(images)}
        <Lightbox
          currentImage={this.state.currentImage}
          images={images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll
          showThumbnails
        />
      </StyledCard>
    )
  }
}

export default Gallery
