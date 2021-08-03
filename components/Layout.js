/** @jsxImportSource theme-ui */
import { jsx, Box } from 'theme-ui'
import Footer from './Footer'
import Navbar from './Navbar'
import SvgBackground from '../assets/background.svg'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  const blogRoute = '/blog'

  return (
    <>
      {pathname === blogRoute && (
        <SvgBackground
          sx={{
            position: 'fixed',
            zIndex: '-1',
            'path:nth-child(1)': { fill: 'elevateBackground', opacity: '0.4' },
            'path:nth-child(2)': { fill: 'primary', opacity: '0.2' },
            'path:nth-child(3)': { fill: 'background' },
          }}
        />
      )}

      <Navbar />
      <Box as="main" variant="container">
        {children}
      </Box>
      <Footer />
    </>
  )
}
