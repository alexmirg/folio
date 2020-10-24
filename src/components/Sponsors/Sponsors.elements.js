import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SponsorsBlock = styled.div`
    padding: 80px 0 50px;
    background: #bebebe;
`

export const SponsorsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 992px) {
        justify-content: space-between;
    }
`

export const SponsorsItem = styled.li`
    margin: 0 15px 30px;
`

export const SponsorsLink = styled(Link)``

export const SponsorsImage = styled.img``