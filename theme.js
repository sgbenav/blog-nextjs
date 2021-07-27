import { roboto } from '@theme-ui/presets'

import { dark, funk } from '@theme-ui/presets'

const theme = {
  ...roboto,
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#fefe',
    background: '#eee5e9',
    primary: '#66ffcc',
    alert: '#FE4A49',
    modes: {
      dark: {
        background: '#06070e',
        primary: '#66ffcc',
        alert: '#FE4A49',
      },
    },
  },
  container: {
    width: '100%',
    maxWidth: '1240px',
    m: 0,
    mx: 'auto',
  },
  styles: {
    ...roboto.styles,
  },
}

export default theme
