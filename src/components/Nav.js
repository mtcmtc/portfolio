//Nav.js
import React, { Component } from 'react';
import styled, { css } from 'styled-components'

//Import Button component
import Button from './Button'

const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;

  @media (max-width: 479px) {
    position: fixed;
  }
`

const NavWrapper = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: flex-end;

    /*if nav is open (show is true) */
    ${props => props.isOpen && css`
      ul {
        position: absolute;
        top:64px;
        max-height: 1000px;
        transition: all 1s ease-in-out;
      }
    `}
  }
`

const NavList = styled.ul`
  margin: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  list-style-type: none;
  height: auto;
  max-height: 0;


  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    max-height: 1000px;
  }
`

const NavItem = styled.li`
  & + & {
    margin-top: 12px;
  }

  @media(min-width: 480px) {
    & + & {
      margin-top: 0;
      margin-left: 32px;
    }
  }

  a{
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #000
    transition: color .25s ease-in-out;

    &:hover {
      color: #888;
    }
  }
`

const NavButton = styled(Button)`
  color:#000;

  @media (min-width: 479px) {
    display: none;
  }
`

export default class Nav extends Component {
  constructor(props){
    super(props)

    this.state = {
      show: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(){
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <Header>
        <NavWrapper isOpen={this.state.show}>
          <NavButton onClick={this.toggleMenu}>Menu</NavButton>
          <NavList>
            <NavItem>
              <a href="/home">Home</a>
            </NavItem>

            <NavItem>
              <a href="/resume">Resume</a>
            </NavItem>

            <NavItem>
              <a href="/projects">Projects</a>
            </NavItem>

            <NavItem>
              <a href="/contact">Contact</a>
            </NavItem>
          </NavList>
        </NavWrapper>
      </Header>
    );
  }
}
