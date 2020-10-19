import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Brand = styled(Link)`
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
    font-size: 4.8rem;
    margin-right: auto;
    margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : '0px')};

    &:hover, &:focus {
        text-decoration: none;
        color: #65ba99;
    }
`