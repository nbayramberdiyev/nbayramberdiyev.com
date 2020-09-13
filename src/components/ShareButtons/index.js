import React from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    LinkedinShareButton,
} from 'react-share'
import {
    EmailIcon,
    FacebookIcon,
    RedditIcon,
    TwitterIcon,
    LinkedinIcon,
} from 'react-share'

import './styles.scss'

const ShareButtons = ({ location }) => {
    return (
        <div className="share-buttons-wrap">
            <EmailShareButton url={location}>
                <EmailIcon round size={32} />
            </EmailShareButton>
            <FacebookShareButton url={location}>
                <FacebookIcon round size={32} />
            </FacebookShareButton>
            <TwitterShareButton url={location}>
                <TwitterIcon round size={32} />
            </TwitterShareButton>
            <RedditShareButton url={location}>
                <RedditIcon round size={32} />
            </RedditShareButton>
            <LinkedinShareButton url={location}>
                <LinkedinIcon round size={32} />
            </LinkedinShareButton>
        </div>
    )
}

export default ShareButtons
