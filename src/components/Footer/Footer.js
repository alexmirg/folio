import React from 'react'
import { Container } from '../../theme/GlobalStyles'
import {
    PageFooter,
    FooterContent,
    FooterContact,
    ContactNumber,
    ContactEmail,
    Address,
    Copyright,
    Paragraph
} from './Footer.elements'

import Heading from '../Heading/Heading'
import Overlay from '../Overlay/Overlay'

import bgImage from '../../images/footer_bg.jpg'

const data = {
    title: 'Contact',
    subtitle: ''
}

const Footer = () => {
    return (
        <>
            <PageFooter bgImage={bgImage}>
                <Container>
                    <Overlay />
                    <FooterContent>
                        <Heading data={data}/>
                        <FooterContact>
                            <ContactNumber to="tel:+39123456789">+39 123 456789</ContactNumber>
                            <ContactEmail to="mailto:contact@example.com">contact@example.com</ContactEmail>
                            <Address>
                                124 Avenue Street, Los angeles,California
                            </Address>
                        </FooterContact>

                        <Copyright>
                            <Paragraph>
                                © Copyright 2020 The Uncreative Lab, All Rights Reserved.
                            </Paragraph>
                        </Copyright>
                    </FooterContent>
                </Container>
            </PageFooter>
        </>
    )
}

export default Footer
