import styled from 'styled-components'
import { Link } from 'react-router-dom'



const iconSize = '35px';

export const SocialsList = styled.ul`
    display: flex;
    list-style: none;
    ${({spacerLeft}) => (spacerLeft ? `margin-left:${spacerLeft}` : '')}
`
export const SocialsItem = styled.li`
    margin: 0 7px;
`
export const SocialsLink = styled(Link)`
    display: block;
`
export const SocialsIcon = styled.i`
    display: block;
    width: ${iconSize};
    height: ${iconSize};
    background: #252222 url(${({icon}) => (icon ? icon : '')});
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 50%;
    transition: all .2s;

    ${SocialsLink}:hover & {
        background-color: #65ba99;
    }
    ${SocialsLink}:focus & {
        background-color: #65ba99;
    }
`