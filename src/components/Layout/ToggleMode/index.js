import React from 'react'
import { ThemeConsumer } from 'styled-components'
import CustomSwitch from '../../CustomSwitch'

const ToggleMode = props => {
    return (
        <ThemeConsumer>
            {theme => {
                return (
                    <CustomSwitch
                        onClick={e =>
                            theme.setTheme({
                                mode: theme.mode === 'dark' ? 'light' : 'dark',
                            })
                        }
                    />
                )
            }}
        </ThemeConsumer>
    )
}
export default ToggleMode
