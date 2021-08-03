const theme = {
  initialColorModeName: 'light',
  colors: {
    primary: '#6171FF',
    secondary: '#E94E7C',
    accent: '#2C0A8E',
    background: '#fff',
    elevateBackground: '#E1EBF6',
    text: '#0A0C10',
    modes: {
      dark: {
        accent: '#F9E200',
        background: '#0F141A',
        elevateBackground: '#1D253B',
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
  containerFixed: {
    width: '100%',
    m: 0,
    mx: 'auto',
    top: 0,
    overflow: 'hidden',
    position: 'fixed',
    transition: '0.25s ease',
    zIndex: 1,
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
    b: {
      color: 'secondary',
    },
    i: {
      color: 'accent',
    },
  },
  link: {
    color: 'text',
    fontSize: '19px',
    textDecoration: 'none',
    cursor: 'pointer',
    mr: 3,
    ':hover': {
      color: 'secondary',
      svg: {
        fill: 'secondary',
      },
    },
  },
  emoji: {
    fontSize: '30px',
    lineHeight: '0',
    textAlign: 'center',
    color: 'red',
  },
  logo: {
    height: '30px',
    width: '30px',
    fill: 'accent',
  },
  themeIcon: {
    minHeight: '22px',
    width: '22px',
    path: {
      fill: 'accent',
    },
    strokeWidth: '4px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    bg: 'elevateBackground',
    overflow: 'hidden',
    borderRadius: '10px',
    border: '4px solid',
    borderColor: 'elevateBackground',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'normal',
    letterSpacing: '1px',
  },
  cardSummary: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '16px',
    fontWeight: 'normal',
    letterSpacing: '1px',
    lineHeight: '1.2',
  },
  cardImage: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    justifyItems: 'center',
    gap: '20px',
  },
}

export default theme
