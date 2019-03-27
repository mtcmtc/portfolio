// Typography.js
import styled from 'styled-components'

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 36px;
  font-weight: bold;

  @media (min-width: 480px) {
    font-size: 48px;
  }

  @media (min-width: 768px) {
    font-size: 72px;
  }

  & + ${Subheading} {
    margin-top: 32px;
  }
`

export const Subheading = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: bold;

  @media (min-width: 480px) {
    font-size: 36px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }
`