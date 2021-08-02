/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box as="main" variant="container">
        {children}
      </Box>
      <Footer />
    </>
  )
}
