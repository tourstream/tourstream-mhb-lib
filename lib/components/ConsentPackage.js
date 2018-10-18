import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import CookieConsent, { Cookies } from 'react-cookie-consent'
import Modal from 'react-responsive-modal'

class ConsentPackage extends React.Component {
  constructor (props) {
    super(props)

    if (this.props.theme !== undefined && this.props.theme.callToActionColor !== undefined) {
      this.props.astyle.color = this.props.theme.callToActionColor
    }

    this.state = {
      open: false,
      visible: true,
    }

    this.onOpenModal = this.onOpenModal.bind(this)
    this.onCloseModal = this.onCloseModal.bind(this)
    this.onClickPrivacyLink = this.onClickPrivacyLink.bind(this)
  }

  onOpenModal () {
    this.setState({ open: true })
  }

  onCloseModal () {
    this.setState({ open: false })
  }

  onClickPrivacyLink () {
    this.setState({ open: false })
    if (this.props.debug !== true) {
      Cookies.set(this.props.cookieName, true)
      this.setState({ visible: false })
    }
  }

  render () {
    const {
      cookieName, style, buttonStyle, astyle,
      disableStyles, mainText, infoText, modalLinkText, modalHeader, modalText,
    } = this.props

    return (
      <div>
        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          little>
          <h2>{modalHeader}</h2>
          <span dangerouslySetInnerHTML={{ __html: modalText }} />
          <Link
            style={astyle}
            onClick={this.onClickPrivacyLink}
            to={{
              pathname: this.props.link,
              hash: this.props.hash,
            }}>
            {modalLinkText}
          </Link>
        </Modal>
        {this.state.visible &&
          <CookieConsent
            style={style}
            buttonStyle={buttonStyle}
            disableStyles={disableStyles}
            cookieName={cookieName}
            buttonText={this.props.buttonText}>
            {mainText}
            <button style={astyle} onClick={this.onOpenModal}>
              {infoText}
            </button>
          </CookieConsent>
        }

      </div>
    )
  }
}

ConsentPackage.propTypes = {
  disableStyles: PropTypes.bool,
  cookieName: PropTypes.string,
  mainText: PropTypes.string,
  infoText: PropTypes.string,

  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonText: PropTypes.string,
  astyle: PropTypes.object,
  modalHeader: PropTypes.string,
  modalText: PropTypes.string,
  modalLinkText: PropTypes.string,
  debug: PropTypes.bool,
}

ConsentPackage.defaultProps = {
  disableStyles: true,
  cookieName: 'CookieConsent',
  mainText: 'This website uses cookies to enhance the user experience.',
  infoText: 'more info',
  buttonText: 'X',
  modalHeader: 'Cookie Guidelines',
  modalText: `We only use Cookies if this creates a benefit for you. For example, some notes are
  displayed only once, if you permit the use of Cookies. We assure you that we do not
  store any personal data in Cookies.
  <br>
  <br>
  If you further use {{brand}}, we assume you are okay with receiving Cookies
  on our website.
  <br>
  <br>
  If you wish not to accept Cookies on our website, you can change your browsers settings
  anytime. To read more on how you can change your browser settingsm please read our `,
  modalLinkText: 'Cookie Guidelines',
  style: {
    position: 'fixed',
    padding: '10px',
    color: '#383838',
    background: '#F0F0F0',
    right: '0',
    zIndex: '999',
    textAlign: 'right',
    borderRadius: '0',
    boxShadow: '8px 8px 20px 1px #666666',
    cursor: 'default',
    userSelect: 'none',
    display: 'flex',
  },
  buttonStyle: {
    position: 'static',
    color: '#383838',
    textDecoration: 'none',
    background: 'none!important',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0!important',
    font: 'inherit',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  astyle: {
    color: '#069ED9',
    textDecoration: 'none',
    background: 'none!important',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0!important',
    font: 'inherit',
    cursor: 'pointer',
  },
  debug: false,
}

export default ConsentPackage
