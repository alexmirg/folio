import React from 'react'
import { Container } from '../../theme/GlobalStyles'
import {
    Navigation,
    NavContent,
    Col,
    NavToggler,
    NavTogglerLine,
    NavWrapper,
    Nav,
    NavList,
    NavItem,
    NavLink
} from './Navbar.elements'

import Socials from '../Socials/Socials'
import Logo from '../Logo/Logo'

const Navbar = () => {
    return (
        <Navigation>
            <Container>
                <NavContent>
                    <Col>
                        <NavToggler>
                            <NavTogglerLine />
                            <NavTogglerLine />
                            <NavTogglerLine />
                        </NavToggler>
                        <Logo />
                    </Col>
                    <NavWrapper>
                        <Nav marginBottom='-4px'>
                            <NavList>
                                <NavItem>
                                    <NavLink to="/">Work</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/">News</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/">Bio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/">Contact</NavLink>
                                </NavItem>
                            </NavList>
                        </Nav>
                        <Socials spacerLeft="62px"/>
                    </NavWrapper>
                </NavContent>
            </Container>
        </Navigation>
    )
}

export default Navbar
