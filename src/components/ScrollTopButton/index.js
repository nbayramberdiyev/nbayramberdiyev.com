import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ArrowUp from '../../../_assets/icons/arrow-up.svg'

const ScrollTopButton = ({ scrollStepInPx, delay }) => {
    const intervalRef = useRef()
    const [paused, setPaused] = useState(true)
    const [show, setShow] = useState(false)

    useEffect(() => {
        function updateShow() {
            setShow(window.scrollY > 200)
        }

        window.addEventListener('scroll', updateShow)

        return () => window.removeEventListener('scroll', updateShow)
    })

    useEffect(() => {
        function scrollStep() {
            if (window.pageYOffset === 0) {
                setPaused(true)
            }
            window.scroll(0, window.pageYOffset - scrollStepInPx)
        }

        if (!paused) {
            let id = setInterval(scrollStep, delay)
            intervalRef.current = id
            return () => clearInterval(id)
        }
    }, [paused, scrollStepInPx, delay])

    function scrollToTop() {
        setPaused(false)
    }

    return show ? (
        <StyledButton onClick={scrollToTop}>
            <ArrowUp />
        </StyledButton>
    ) : null
}

export default ScrollTopButton

const StyledButton = styled.button`
    cursor: pointer;
    position: fixed;
    bottom: 55px;
    right: 30px;
    z-index: 3;
    padding: 0.2rem 0.4rem;
    background: #7d7b92;
    opacity: 0.4;
    color: #fff;
    border: none;
    border-radius: 5px;
    transition: opacity 300ms linear;
    outline: none;
    svg {
        width: 1.25em;
    }
    &:hover {
        opacity: 1;
    }
`
