import React from 'react'
import { Container } from '../../theme/GlobalStyles'
import {
    PageHeader,
    HeaderContent,
    Heading,
    HeadingSmall
} from './Header.elements'

import Overlay from '../Overlay/Overlay'
import bgImage from '../../images/header_bg.jpg'

const Header = () => {
    return (
        <>
            <PageHeader bgImage={bgImage}>
                <Container>
                    <Overlay />
                    <HeaderContent>
                        <Heading>
                            .Folio<br/>One page<br/>PSD theme
                            <HeadingSmall>
                                Simple, clear, minimal portfolio template
                            </HeadingSmall>
                        </Heading>
                    </HeaderContent>
                </Container>
            </PageHeader>
        </>
    )
}

export default Header
