import React from 'react'
import { Container } from '../../theme/GlobalStyles'
import { PortfolioSection } from './Portfolio.elements'

import Heading from '../Heading/Heading'
import Gallery from '../Gallery/Gallery'

const data = {
    title: 'Portfolio',
    subtitle: 'GLAMOUR FASHION PERSONAL STREET PORTRAIT'
}

const Portfolio = () => {
    return (
        <>
            <PortfolioSection>
                <Container>
                    <Heading data={data}/>
                    <Gallery />
                </Container>
            </PortfolioSection>       
        </>
    )
}

export default Portfolio
