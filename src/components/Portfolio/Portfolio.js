import React from 'react'
import { Container } from '../../GlobalStyles'
import { PortfolioSection } from './Portfolio.elements'

import Heading from '../Heading/Heading'
import Gallery from '../Gallery/Gallery'

const Portfolio = () => {
    return (
        <>
            <PortfolioSection>
                <Container>
                    <Heading />
                    <Gallery />
                </Container>
            </PortfolioSection>       
        </>
    )
}

export default Portfolio
