import React from 'react'
import Tag from './Tag'
import { isMobile } from 'react-device-detect'
import styled, { keyframes } from 'styled-components'
import { TAG } from '../../constants'

class Tags extends React.Component {
    constructor(props) {
        super(props)
        this.tagRef = React.createRef()
        this.state = {
            sticky: undefined,
            topPos: undefined,
            showSwipeIcon: false,
        }
    }

    componentDidMount() {
        if (isMobile) {
            this.setState({
                sticky: this.tagRef.current,
                topPos:
                    this.tagRef.current.getBoundingClientRect().y +
                    window.pageYOffset,
                horizontalScroll: this.tagRef.current.querySelector(
                    '.tag-list-inner'
                ),
            })
            const width = this.tagRef.current.clientWidth
            const scroll = this.tagRef.current.querySelector('.tag-list-inner')
            const scrollWidth = scroll.scrollWidth
            // Scroll to saved position
            const scrollPos = sessionStorage.getItem('scrollX_') || 0
            scroll.scrollLeft = scrollPos
            let swipedCount = parseInt(localStorage.getItem('swiped_')) || 0

            // Display swipe icon animation for the first two sessions
            if (
                scrollWidth > width &&
                swipedCount < 2 &&
                !sessionStorage.getItem('swiped__')
            ) {
                this.setState({ showSwipeIcon: true })
                localStorage.setItem('swiped_', swipedCount + 1)
                sessionStorage.setItem('swiped__', true)
            }

            window.addEventListener('scroll', this.detectSticky)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.detectSticky)
    }

    detectSticky = () => {
        const { sticky, topPos } = this.state
        const offset = topPos - window.pageYOffset
        const activated = offset <= 0
        const activatedNear = activated && offset >= -55

        if (activatedNear) {
            sticky.classList.add('moveToBotAnimate')
        } else if (activated) {
            sticky.classList.add('moveToBot')
        } else {
            this.unmountTagsAnimation()
        }
    }

    unmountTagsAnimation = () => {
        const sticky = this.tagRef.current
        sticky.classList.remove('moveToBot')
        sticky.classList.remove('moveToBotAnimate')
    }

    handleScrollX = () => {
        if (this.state.sticky && this.state.horizontalScroll) {
            const width = this.state.sticky.clientWidth
            const scrollWidth = this.state.horizontalScroll.scrollWidth
            if (scrollWidth > width) {
                const scrolledPos = this.state.horizontalScroll.scrollLeft
                sessionStorage.setItem('scrollX_', scrolledPos)
            }
        }
    }

    render() {
        const { tags, selectTag, selectedTag } = this.props
        const childrenElement = (
            <div className="tag-list" onScroll={this.handleScrollX}>
                {isMobile && this.state.showSwipeIcon && (
                    <StyledSVG
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                        className="svg-inline--fa fa-w-14 icon-hand-ptr"
                    >
                        <path
                            fill="currentColor"
                            d="M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z"
                        />
                    </StyledSVG>
                )}
                {/* Used to apply overflow to work with sticky */}
                <div className="tag-list-inner">
                    <Tag
                        title={TAG.ALL}
                        selectTag={selectTag}
                        selectedTag={selectedTag}
                    />
                    {tags.map((tag, i) => {
                        return (
                            <Tag
                                key={i}
                                title={tag}
                                selectTag={selectTag}
                                selectedTag={selectedTag}
                            />
                        )
                    })}
                </div>
            </div>
        )

        return !isMobile ? (
            <StyledTagsVertical className="tags-vertical">
                {childrenElement}
            </StyledTagsVertical>
        ) : (
            <StyledTagsHorizontal className="tags-horizontal" ref={this.tagRef}>
                {childrenElement}
            </StyledTagsHorizontal>
        )
    }
}

export default Tags

const StyledTagsVertical = styled.div`
    margin-top: 0.5rem;
    background: none !important;
    .tag-list {
        position: sticky;
        top: 50px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0.5rem;
        &-inner {
            width: 180px;
            overflow-x: auto;
        }
    }
    @media (max-width: 500px) {
        .tag-list {
            &-inner {
                width: 80px;
                font-size: 0.75rem;
            }
        }
    }
`

const StyledTagsHorizontal = styled.div`
    position: static;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 1.5rem 0.2rem;
    width: 100%;
    height: 46px;
    translate: transform 500ms ease-in;

    .tag-list {
        position: relative;
        width: 100%;
        &-inner {
            display: flex;
            flex-direction: row;
            padding: 1.3rem 0rem;
            width: inherit;
            overflow-x: auto;
            /* Hide scrollbar */
            ::-webkit-scrollbar {
                width: 0px;
                display: none;
            }
        }
    }
`
const swipeLeft = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 1;
        right: 35%;
        transform: translateX(-35%);
        bottom: 5px;
    }
    100% {
        opacity: 0;
        right: 35%;
        transform: translateX(-35%);
        bottom: 5px;
    }
`

const StyledSVG = styled.svg`
    position: absolute;
    bottom: 6px;
    right: 20%;
    transform: translateX(-20%);
    animation: ${swipeLeft} 2000ms forwards 1500ms ease-in;
`
