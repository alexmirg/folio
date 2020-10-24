import React from 'react'
import {
    SponsorsBlock,
    SponsorsList,
    SponsorsItem,
    SponsorsLink,
    SponsorsImage
} from './Sponsors.elements'

import { Container } from '../../theme/GlobalStyles'

import canon from '../../images/sponsor/canon.png'
import nikon from '../../images/sponsor/nikon.png'
import manfrotto from '../../images/sponsor/manfrotto.png'
import prolight from '../../images/sponsor/prolight.png'

const Sponsors = () => {
    return (
        <SponsorsBlock>
            <Container>
                <SponsorsList>
                    <SponsorsItem><SponsorsLink to="/"><SponsorsImage src={canon} alt="" /></SponsorsLink></SponsorsItem>
                    <SponsorsItem><SponsorsLink to="/"><SponsorsImage src={nikon} alt="" /></SponsorsLink></SponsorsItem>
                    <SponsorsItem><SponsorsLink to="/"><SponsorsImage src={manfrotto} alt="" /></SponsorsLink></SponsorsItem>
                    <SponsorsItem><SponsorsLink to="/"><SponsorsImage src={prolight} alt="" /></SponsorsLink></SponsorsItem>
                </SponsorsList>
            </Container>
        </SponsorsBlock>
    )
}

export default Sponsors
