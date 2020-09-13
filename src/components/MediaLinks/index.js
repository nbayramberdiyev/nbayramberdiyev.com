import React from 'react'
import styled from 'styled-components'
import MediaLink from './MediaLink'

const MediaLinks = () => {
    return (
        <StyledMediaLinks>
            <MediaLink
                accountInfo="nbayramberdiyev"
                mediaName="GitHub"
                preHref="https://github.com/"
            />
            <MediaLink
                accountInfo="nbayramberdiyev"
                mediaName="Twitter"
                preHref="https://twitter.com/"
            />
        </StyledMediaLinks>
    )
}

export default MediaLinks

const StyledMediaLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    a {
        color: steelblue;
        margin-right: 0.25rem;
        font-size: 0.8rem;
    }
`
