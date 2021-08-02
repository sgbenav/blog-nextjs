/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { jsx, Flex, Box, Button, Text } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import Emoji from '../components/Emoji'
import Logo from '../assets/logo.svg'
import Theme from '../assets/theme.svg'

export default function Navbar() {
  const [colorMode, setColorMode] = useColorMode()
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('here', small)
      window.addEventListener('scroll', () => setSmall(window.pageYOffset > 50))
    }
  }, [small])

  return (
    <Box
      as="header"
      variant="containerFixed"
      sx={{ padding: small ? '10px 25px' : '5px 10px', bg: small ? 'background' : 'transparent' }}
    >
      <Box as="nav" variant="navigation">
        <Flex p={2} sx={{ alignItems: 'center' }}>
          <Box sx={{ flex: '1 1 auto' }}>
            <Link href="/">
              <a sx={{ variant: 'link', display: 'flex', alignItems: 'center' }}>
                <Logo sx={{ variant: 'logo' }} />
                <span sx={{ mb: 1, ml: 1, fontWeight: '300', fontFamily: 'Monaco' }}>minare</span>
              </a>
            </Link>
          </Box>
          <Link href="/blog">
            <a sx={{ variant: 'link' }}>Blog</a>
          </Link>
          <Link href="/shop">
            <a sx={{ variant: 'link' }}>Shop</a>
          </Link>
          <Link href="/about">
            <a sx={{ variant: 'link' }}>About</a>
          </Link>
          <Link href="/contact">
            <a sx={{ variant: 'link' }}>Contact</a>
          </Link>

          <Button
            bg="elevateBackground"
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '10px 15px',
            }}
            onClick={(e) => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }}
          >
            <Theme sx={{ variant: 'themeIcon' }} />
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
