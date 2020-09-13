import React, { Component } from 'react'
import Switch from 'react-switch'
import { withTheme } from 'styled-components'
import MoonIcon from '../../../_assets/icons/moon.svg'
import SunIcon from '../../../_assets/icons/sun.svg'
import config from '../../../config'

import './style.scss'

class CustomSwitch extends Component {
    constructor(props) {
        super(props)

        this.state = { checked: config.defaultTheme === 'dark' }
    }

    componentDidMount() {
        this.setState({ checked: this.props.theme.mode === 'dark' })
    }

    handleToggle = checked => {
        this.setState({ checked })
        this.props.onClick()
    }

    render() {
        return (
            <label className="custom-switch" style={{ display: 'block' }}>
                <Switch
                    onChange={this.handleToggle}
                    checked={this.state.checked}
                    offColor="#bbb"
                    onColor="#4a4a4a"
                    uncheckedIcon={<MoonIcon className="icon" />}
                    checkedIcon={<SunIcon className="icon" />}
                    handleDiameter={21}
                    height={23}
                    width={40}
                    onHandleColor="#333"
                    aria-checked={this.state.checked}
                />
            </label>
        )
    }
}

export default withTheme(CustomSwitch)
