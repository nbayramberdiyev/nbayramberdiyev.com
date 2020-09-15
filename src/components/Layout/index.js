import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '../Shared/styles-global'
import CodeBlockStyles from '../../components/Code/styles/code-global'
import Header from '../Header'
import UseTheme from '../../hooks/use-theme'
import Footer from '../Footer'
import ScrollTopButton from '../ScrollTopButton'

const Layout = ({ children, showTitle, isPostTemplate }) => {
    const setTheme = UseTheme()

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const childrenElement = (
        <>
            <GlobalStyles />
            <CodeBlockStyles />
            <Header
                siteTitle={data.site.siteMetadata.title}
                showTitle={showTitle}
                isPostTemplate={isPostTemplate}
            />
            <StyledMain>{children}</StyledMain>
            <Footer />
            <ScrollTopButton scrollStepInPx="150" delay="5" />
        </>
    )

    return (
        // Used to set theme
        <ThemeProvider theme={setTheme}>
            {/* Used for global variables */}
            <ThemeProvider theme={theme}>
                {isPostTemplate ? (
                    <div className="post-bg-color">{childrenElement}</div>
                ) : (
                    <div className="page-wrapper">{childrenElement}</div>
                )}
            </ThemeProvider>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

const StyledMain = styled.main`
    position: relative;
    margin: 0 auto;
    max-width: ${theme.maxWidthSite};
`
