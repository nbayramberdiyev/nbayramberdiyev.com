import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import RSS from '../../../_assets/icons/rss.svg'
import { setThemeVars } from '../../util/theme-helper'

const Footer = () => {
    return (
        <StyledFooter className="main-footer">
            <div />
            <div>
                <span>© {new Date().getFullYear()} </span>
                <StyledA href="/" target="_blank" rel="noopener">
                    nbayramberdiyev
                </StyledA>
                . Built with {` `}
                <StyledA
                    href="https://www.gatsbyjs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Gatsby
                </StyledA>
                .
            </div>
            <Link to="/rss.xml" aria-label="RSS">
                <StyledRSS />
            </Link>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.9rem;
    margin-top: 1rem;
    padding: 1rem;

    @media (max-width: 500px) {
        font-size: 0.77rem;
    }
`
const StyledA = styled.a``

const StyledRSS = styled(RSS)`
    width: 20px;
    height: 20px;
    fill: ${() => setThemeVars('#aaa', '#888')};
`
