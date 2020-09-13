import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { setThemeVars } from '../../../util/theme-helper'
import { theme } from '../../Shared/styles-global'

const PostCard = ({ id, title, date, path, excerpt, timeToRead }) => {
    return (
        <>
            <Link to={path}>
                <StyledPostCard key={id}>
                    <h3>{title}</h3>
                    <span>
                        <span role="img" aria-label="•">
                            ☕️
                        </span>
                        {` ` + timeToRead} dk.
                    </span>
                    <p>{excerpt}</p>
                </StyledPostCard>
            </Link>
        </>
    )
}

export default PostCard

const StyledPostCard = styled.div`
    cursor: pointer;
    padding: 1rem;
    transition: none;
    border-radius: 6px;

    h3 {
        font-weight: 500;
    }

    &:hover {
        background: ${() =>
            setThemeVars(theme.bgSubColorLight, theme.darkerColor)};
    }

    span {
        font-size: 0.8rem;
        .icon-clock {
            margin: 0 0.1rem;
        }
    }

    p {
        margin-top: 0.5rem;
        color: ${() =>
            setThemeVars(theme.fontSubColorLight, theme.fontSubColorDark)};
    }

    @media (max-width: 500px) {
        padding: 1.5rem 1.25rem;

        h3 {
            font-size: 1.15rem;
        }

        /* Remove hover */
        &:hover {
            background: transparent;
        }
    }
`
