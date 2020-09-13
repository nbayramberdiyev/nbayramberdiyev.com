import { theme } from '../components/Shared/styles-global'

// Sets variables for light and dark theme
export const setThemeVars = (light, dark) => {
    return theme.curTheme === 'light' ? light : dark
}
