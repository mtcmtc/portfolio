//Resume.js

import React from 'react'
import styled from 'styled-components'

//Import Container component
import Container from './../components/Container'

//Import Link component
import Link from './../components/Link'

//Import Section component
import Section from './../components/Section'

//Import typography components
import { Heading, Subheading, Text} from './../components/Typography'

export default class Resume extends React.Component {
  render () {
    return (
      <Section centered>
        <Container>
          <Subheading>Michael Chen</Subheading>
          <Heading>About Me</Heading>
          <Text>I am a digital designer and developer originally from London and based in New York with over 10 years of experience in the industry. I am a passionate creative that always leads by example and likes to get his hands dirty. I believe that design is only as powerful as the message it is able to carry. I constantly seek to inspire, and build the best work possible. I am a critical thinker and problem solver that pursues a holistic approach. I always make sure every aspect gets produced at the highest quality.</Text>
          <Text>Now I am working full time freelance as a designer and developer, building interactive digital products for clients from around the World. If you are interested in a new project, collaboration, or just to chat, feel free to contact me:</Text>
          <a href="mailto:email@example.com">email@example.com</a>
        </Container>
      </Section>
    )
  }
}