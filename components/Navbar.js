/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Flex, Box, Button } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import Logo from '../assets/logo.svg'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'

export default function Navbar() {
  const [colorMode, setColorMode] = useColorMode()
  const [mounted, setMounted] = useState(false)
  const [small, setSmall] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

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
          {mounted && (
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
              {colorMode === 'light' ? <Sun sx={{ variant: 'themeIcon' }} /> : <Moon sx={{ variant: 'themeIcon' }} />}
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  )
}
