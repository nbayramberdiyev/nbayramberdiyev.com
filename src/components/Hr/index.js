import React from 'react'
import styled from 'styled-components'

const Hr = ({ verticalMargin, widthInPercent, ...otherProps }) => {
    const width = widthInPercent ? `${widthInPercent}%` : `100%`
    const margin = verticalMargin ? `${verticalMargin} auto` : `0.5rem auto`
    return (
        <StyledHr
            className="custom-hr"
            width={width}
            margin={margin}
            {...otherProps}
        />
    )
}

export default Hr

const StyledHr = styled.hr`
    display: block;
    border: 0;
    width: ${props => props.width};
    margin: ${props => props.margin};
`
