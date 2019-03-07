import Header from './components/Header'
import Footer from './components/Footer'
import HeaderMenu from './components/HeaderMenu'
import DropDownMenu from './components/DropDownMenu'
import ImageSlider from './components/ImageSlider'
import HtmlHeaderCanonicalLinks from './components/HtmlHeaderCanonicalLinks'
import ConsentPackage from './components/ConsentPackage'

import Button from './elements/Button'
import Card from './elements/Card'
import CardBoxed from './elements/CardBoxed'
import Map from './elements/Map'

import Home from './containers/Home'
import Hotels from './containers/Hotels'
import Contact from './containers/Contact'
import Imprint from './containers/Imprint'
import Jobs from './containers/Jobs'
import Privacy from './containers/Privacy'
import { translateCurrentUrl } from './helper/translateCurrentUrl'
import ListWithIcons from './elements/ListWithIcons'

import styled, { ThemeProvider } from 'styled-components'
import TagManager from 'react-gtm-module'

module.exports = {
  Card,
  CardBoxed,
  ConsentPackage,
  Map,
  Header,
  Button,
  ListWithIcons,
  Footer,
  ImageSlider,
  Home,
  Hotels,
  Contact,
  Imprint,
  Jobs,
  Privacy,
  HeaderMenu,
  DropDownMenu,
  HtmlHeaderCanonicalLinks,
  translateCurrentUrl,
  TagManager,
  styled,
  ThemeProvider,
}
