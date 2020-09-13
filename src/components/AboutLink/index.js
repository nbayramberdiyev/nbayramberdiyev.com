import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const AboutLink = () => {
    return (
        <StyledMainCardName className="main-card-name">
            <h2>
                <Link to="/about">nbayramberdiyev</Link>
            </h2>
        </StyledMainCardName>
    )
}

export default AboutLink

const StyledMainCardName = styled.div`
    display: inline-block;
    cursor: pointer;
`
