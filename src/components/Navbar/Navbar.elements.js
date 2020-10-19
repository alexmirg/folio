import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navigation = styled.div`
        background: #252222;
`
export const NavContent = styled.div`
    padding: 28px 0;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Col = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
`
export const NavToggler = styled.div`
    position: relative;
    width: 34px;
    height: 34px;
    margin-right: 15px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`
export const NavTogglerLine = styled.span`
    position: absolute;
    display: block;
    width: 100%;
    height: 6px;
    background: #fff;
    &:nth-of-type(1) { 
        top: 0;
    }
    &:nth-of-type(2) {     
        top: 50%;
        transform: translateY(-50%);
    }
    &:nth-of-type(3) {
        bottom: 0;
    }
`
export const NavWrapper = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`
export const Nav = styled.nav`
    margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : '0px')};
`
export const NavList = styled.ul`
    display: flex;
    font-family: 'Bebas Neue', sans-serif;
    list-style: none;
`
export const NavItem = styled.li``

export const NavLink = styled(Link)`
    text-transform: uppercase;
    font-size: 1.8rem;
    padding: .3em;
    margin: 0 .25em;
    &:hover,
    &:focus {
    color: #65ba99;
}
` 