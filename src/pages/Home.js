import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router';

// Import Container component
import Button from './../components/Button'
import Container from './../components/Container'

// Import Typography components
import { Heading, Subheading } from './../components/Typography'

const HomeWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url(https://source.unsplash.com/t3zrEm88ehc/480x800);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 480px) {
    background-image: url(https://source.unsplash.com/t3zrEm88ehc/768x1024);
  }

  @media (min-width: 768px) {
    background-image: url(https://source.unsplash.com/t3zrEm88ehc/1280x800);
  }

  @media (min-width: 1280px) {
    background-image: url(https://source.unsplash.com/t3zrEm88ehc/1600x900);
  }

  @media (min-width: 1600px) {
    background-image: url(https://source.unsplash.com/t3zrEm88ehc/1920x1080);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
  }

  ${Container} {
    position: relative;
    z-index: 2;
    color: #fff;
  }

  ${Subheading} {
    margin-bottom: 32px;
  }
`

// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent('a')

export default class Home extends React.Component {
  render () {
    return (
      <HomeWrapper>
        <Container>
          <Heading>Thomas Paine</Heading>

          <Subheading>Designer & developer</Subheading>

          <HomeButton href="/portfolio">My work</HomeButton>
        </Container>
      </HomeWrapper>
    )
  }
}