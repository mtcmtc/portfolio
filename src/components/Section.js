//Section.js

import styled, { css } from 'styled-components'

//Import Container component
import Container from './Container'

const Section = styled.section`
	${props => props.centered && css`
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	`}

	${Container} {
		position: relative;
		z-index: 2;
	}
`

export default Section