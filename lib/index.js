import Header from './components/Header'
import Footer from './components/Footer'
import HeaderMenu from './components/HeaderMenu'
import DropDownMenu from './components/DropDownMenu'
import ImageSlider from './components/ImageSlider'
import HtmlHeaderCanonicalLinks from './components/HtmlHeaderCanonicalLinks'

import Button from './elements/Button'
import Card from './elements/Card'

import Home from './containers/Home'
import Contact from './containers/Contact'
import Imprint from './containers/Imprint'
import Jobs from './containers/Jobs'
import Privacy from './containers/Privacy'
import { translateCurrentUrl } from './helper/translateCurrentUrl'

module.exports = {
  Card,
  Header,
  Button,
  Footer,
  ImageSlider,
  Home,
  Contact,
  Imprint,
  Jobs,
  Privacy,
  HeaderMenu,
  DropDownMenu,
  HtmlHeaderCanonicalLinks,
  translateCurrentUrl,
}
