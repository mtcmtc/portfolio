//Projects.js

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

const PortfolioWrapper = styled(Section)`
	padding-top:20px;
	padding-bottom:80px
`

const PortfolioGrid = styled.div`
	padding-bottom: 32px;
	display: flex;
	flex-wrap: wrap;
`

const PortfolioItem = styled.a`
	display: block;
	cursor: pointer;
	width: 100%;
	transition: opacity .25s ease-in-out;

	&:focus,
	&:hover {
		opacity: .5;
	}

	@media (max-width:767px) {
		&:nth-child(n+2) {
			margin-top: 16px;
		}
	}

	@media (min-width: 768px) and (max-width: 991px) {
		width: calc(50% - 32px);

		&:nth-child(odd) {
			margin-right: 32px;
		}

		&:nth-child(even) {
			margin-left: 32px;
		}

		&:nth-child(n+3) {
			margin-top: 48px;
		}
	}

	@media (min-width: 992px) {
		width: calc(33.33333% - 32px);

		&:first-child,
		&:nth-child(4),
		&:nth-child(7) {
			margin-right: 32px;
		}

		&:nth-child(2),
		&:nth-child(5),
		&:nth-child(8) {
			margin-left: 16px;
			margin-right 16px;
		}

		&:nth-child(3),
	    &:nth-child(6),
	    &:last-child {
	      margin-left: 32px;
	    }

	    &:nth-child(n+4) {
	      margin-top: 24px;
	    }
	}
`

const PortfolioItemThumbnail = styled.img`
	max-width: 100%;
	object-fit: contain;
`

export default class Projects extends React.Component {
  render () {
    return(
		<PortfolioWrapper>
			<Container>
				<Subheading>Michael Chen</Subheading>

				<Heading>My work</Heading>

				<Text>Selected examples of my work. If you want to see more, drop me an email.</Text>

				<PortfolioGrid>
					<PortfolioItem href="">
		              <PortfolioItemThumbnail src="https://source.unsplash.com/z4CAuzwaXrM/600x600" srcSet="https://source.unsplash.com/z4CAuzwaXrM/600x600 1x, https://source.unsplash.com/z4CAuzwaXrM/1200x1200 2x" alt="Example of work" />
		            </PortfolioItem>

		            <PortfolioItem href="">
		              <PortfolioItemThumbnail src="https://source.unsplash.com/-aDl1z8_nGY/600x600" srcSet="https://source.unsplash.com/-aDl1z8_nGY/600x600 1x, https://source.unsplash.com/-aDl1z8_nGY/1200x1200 2x" alt="Example of work" />
		            </PortfolioItem>

		            <PortfolioItem href="">
		              <PortfolioItemThumbnail src="https://source.unsplash.com/qvEwMfUX_DM/600x600" srcSet="https://source.unsplash.com/qvEwMfUX_DM/600x600 1x, https://source.unsplash.com/qvEwMfUX_DM/1200x1200 2x" alt="Example of work" />
		            </PortfolioItem>

		            <PortfolioItem href="">
		              <PortfolioItemThumbnail src="https://source.unsplash.com/9QjbejABFn8/600x600" srcSet="https://source.unsplash.com/9QjbejABFn8/600x600 1x, https://source.unsplash.com/9QjbejABFn8/1200x1200 2x" alt="Example of work" />
		            </PortfolioItem>

		            <PortfolioItem href="">
		              <PortfolioItemThumbnail src="https://source.unsplash.com/cDD83wV627U/600x600" srcSet="https://source.unsplash.com/cDD83wV627U/600x600 1x, https://source.unsplash.com/cDD83wV627U/1200x1200 2x" alt="Example of work" />
		            </PortfolioItem>

		            <PortfolioItem href="">
		              <PortfolioItemThumbnail src="https://source.unsplash.com/KDYcgCEoFcY/600x600" srcSet="https://source.unsplash.com/KDYcgCEoFcY/600x600 1x, https://source.unsplash.com/KDYcgCEoFcY/1200x1200 2x" alt="Example of work" />
		            </PortfolioItem>

		            <PortfolioItem href="">
		              <PortfolioItemThumbnail src="https://source.unsplash.com/oKfCxcKnCo8/600x600" srcSet="https://source.unsplash.com/oKfCxcKnCo8/600x600 1x, https://source.unsplash.com/oKfCxcKnCo8/1200x1200 2x" alt="Example of work" />
		            </PortfolioItem>

		            <PortfolioItem href="">
		              <PortfolioItemThumbnail src="https://source.unsplash.com/dClHqW-EfS8/600x600" srcSet="https://source.unsplash.com/dClHqW-EfS8/600x600 1x, https://source.unsplash.com/dClHqW-EfS8/1200x1200 2x" alt="Example of work" />
		            </PortfolioItem>

		            <PortfolioItem href="">
		              <PortfolioItemThumbnail src="https://source.unsplash.com/74elF-XSsPg/600x600" srcSet="https://source.unsplash.com/74elF-XSsPg/600x600 1x, https://source.unsplash.com/74elF-XSsPg/1200x1200 2x" alt="Example of work" />
		            </PortfolioItem>
		        </PortfolioGrid>

		        <Text>Let's get in touch:</Text>

				<Link href="mailto:email@example.com">email@example.com</Link>
        
			</Container>
		</PortfolioWrapper>
    )
  }
}