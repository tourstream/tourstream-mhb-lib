import styled from 'styled-components'

const Headline1 = styled.h1`
  color: ${props => props.theme.headline1Color};
  background-color: ${props => props.theme.headline1BackgroundColor};
  font-family: ${props => props.theme.headlineFontFamily};
  width: auto;
  display: block;
  font-size: 28px;
  font-weight: 300;
  line-height: 28px;
  padding: 1.5rem 0;
  text-align: center;
  vertical-align: middle;
  margin: 0 0 1rem 0;
`
module.exports = {
  Headline1,
}
