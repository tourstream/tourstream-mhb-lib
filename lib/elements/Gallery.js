import React, { Component } from 'react'
import styled from 'styled-components'
import Lightbox from 'react-images'

const StyledGallery = styled.div`
  margin: 0 -.5rem; 
  .gallery-item {
    display: inline-block;
    width: 100%;
    a {
      display: block;
      margin: 0 .5rem .5rem;
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
`

class Gallery extends Component {
  constructor () {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

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
    const { media } = this.props

    if (!media || !media.length) {
      return null
    }

    return (
      <div>
        {this.renderGallery(media)}
        <Lightbox
          currentImage={this.state.currentImage}
          images={media}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll
          showThumbnails
        />
      </div>
    )
  }
}

export default Gallery
