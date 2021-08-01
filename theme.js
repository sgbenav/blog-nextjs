import { roboto } from '@theme-ui/presets'
const theme = {
  initialColorModeName: 'light',
  colors: {
    primary: '#6171FF',
    secondary: '#E94E7C',
    accent: '#2C0A8E',
    background: '#fff',
    text: '#0A0C10',
    modes: {
      dark: {
        accent: '#F9E200',
        background: '#0F141A',
        text: '#fff',
      },
    },
  },
  fonts: {
    body: 'Wotfard, Futura, system-ui, -apple-system,sans-serif, sans-serif',
    heading: 'inherit',
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      lineHeight: '1.75',
      letterSpacing: 'normal',
      bg: 'background',
    },
    a: {
      textDecoration: 'none',
    },
  },
  container: {
    width: '100%',
    maxWidth: '1024px',
    m: 0,
    mx: 'auto',
    mt: '125px',
    padding: '10px',
  },
  containerFluid: {
    width: '100%',
    m: 0,
    mx: 'auto',
    top: 0,
    overflow: 'hidden',
    position: 'fixed',
    transition: '0.25s ease',
  },
  title: {
    color: 'accent',
    fontSize: '38px',
    letterSpacing: '4px',
    fontWeight: 'bold',
    my: 4,
  },
  subtitle: {
    color: 'primary',
    fontSize: '32px',
    fontWeight: 'normal',
    letterSpacing: '2px',
    my: 4,
  },
  paragraph: {
    fontSize: '19px',
  },
  link: {
    color: 'accent',
    fontSize: '19px',
    textDecoration: 'none',
    cursor: 'pointer',
    mr: 3,
    ':hover': {
      color: 'secondary',
    },
  },
  emoji: {
    fontSize: '30px',
    lineHeight: '0',
    textAlign: 'center',
  },
}

export default theme

// initialColorModeName: 'light',
//   useColorSchemeMediaQuery: true,
//   colors: {
//   text: '#000',
//     background: '#fff',
//     primary: '#07c',
//     secondary: '#609',
//     modes: {
//     dark: {
//       text: '#fff',
//         background: '#222',
//         primary: '#0cf',
//         secondary: '#90c',
//     },
//   },
// },
// fonts: {
//   body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//     heading: 'inherit',
// },
// styles: {
//   root: {
//     fontFamily: 'body',
//       color: 'text',
//       bg: 'background',
//   },
//   h1: {
//     fontSize: [4, 5, 6],
//       color: 'primary',
//   },
//   h2: {
//     color: 'primary',
//   },
//   a: {
//     color: 'primary',
//       textDecoration: 'none',
//       ':hover': {
//       color: 'secondary',
//         textDecoration: 'underline',
//     },
//   },
// },
// container: {
//   width: '100%',
//     maxWidth: '1024px',
//     m: 0,
//     mx: 'auto',
// },
// }
