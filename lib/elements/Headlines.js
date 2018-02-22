import styled from 'styled-components'

const Headline1 = styled.h1`
  color: ${props => props.theme.headline1Color};
  background-color: ${props => props.theme.headline1BackgroundColor};
  font-family: ${props => props.theme.headlineFontFamily};
  height: 38px;
  width: auto;
  display: block;
  font-size: 28px;
  font-weight: 300;
  line-height: 38px;
  margin: 0 0 16px 0;
  padding: 0;
  text-align: center;
  vertical-align: middle;
`
module.exports = {
  Headline1,
}
