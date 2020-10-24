import React from 'react'
import {
    SocialsList,
    SocialsItem,
    SocialsLink,
    SocialsIcon
} from './Socials.elements'

import facebookIcon from '../../images/socials/facebook-icon.png'
import flickrIcon from '../../images/socials/flickr-icon.png'
import linkedinIcon from '../../images/socials/linkedin-icon.png'
import twitterIcon from '../../images/socials/twitter-icon.png'

const Socials = (props) => {
    return (
        <SocialsList spacerLeft={props.spacerLeft}>
            <SocialsItem>
                <SocialsLink to="/"><SocialsIcon icon={linkedinIcon} /></SocialsLink>
            </SocialsItem>
            <SocialsItem>
                <SocialsLink to="/"><SocialsIcon icon={facebookIcon} /></SocialsLink>
            </SocialsItem>
            <SocialsItem>
                <SocialsLink to="/"><SocialsIcon icon={flickrIcon} /></SocialsLink>
            </SocialsItem>
            <SocialsItem>
                <SocialsLink to="/"><SocialsIcon icon={twitterIcon} /></SocialsLink>
            </SocialsItem>
        </SocialsList>
    )
}

export default Socials
