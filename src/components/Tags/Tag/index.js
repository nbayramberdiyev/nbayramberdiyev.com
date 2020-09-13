import React from 'react'
import styled from 'styled-components'
import { theme } from '../../Shared/styles-global'
import { isMobile } from 'react-device-detect'

const Tag = ({ title, selectTag, selectedTag, unmountTagsAnimation }) => {
    const handleClick = () => {
        selectTag(title)
    }

    return !isMobile ? (
        <StyledTagVertical
            className="tag-vertical"
            onClick={handleClick}
            selected={selectedTag === title}
        >
            {title}
        </StyledTagVertical>
    ) : (
        <StyledTagHorizontal
            className="tag-horizontal"
            onClick={handleClick}
            selected={selectedTag === title}
        >
            {title}
        </StyledTagHorizontal>
    )
}

export default Tag

const StyledTagVertical = styled.div`
    cursor: pointer;
    padding: 0.25rem 0 0.25rem 0.5rem;
    margin: 0.5rem 0;
    border-left-width: 3px;
    border-left-style: solid;
    border-left-color: ${props =>
        props.selected ? `${theme.mintColor}` : 'transparent'};
    font-weight: ${props => (props.selected ? 'bold' : '400')};
    position: sticky;
    transition: none;
    border-radius: ${props => (props.selected ? 0 : '3px')} 3px 3px
        ${props => (props.selected ? 0 : '3px')};
`

const StyledTagHorizontal = styled.div`
    position: relative;
    cursor: pointer;
    padding: 0.5rem 0.9rem;
    margin: 0 0.3rem;
    font-size: 0.9rem;
    background: ${props => !props.selected && 'none !important'};
    border-radius: 15px;
    font-weight: ${props => (props.selected ? 'bold' : '400')};
    white-space: nowrap;
    transition: none;
`
