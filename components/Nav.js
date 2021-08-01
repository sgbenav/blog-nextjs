/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { jsx, Flex, Box, Button, Text } from 'theme-ui'
import { useColorMode } from 'theme-ui'
import Emoji from '../components/Emoji'

export default function Nav() {
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
      variant="containerFluid"
      sx={{ padding: small ? '10px 25px' : '5px 10px', bg: small ? 'background' : 'transparent' }}
    >
      <Box as="nav" variant="navigation">
        <Flex p={2} sx={{ alignItems: 'center' }}>
          <Flex className="logo" sx={{ flex: '1 1 auto' }}>
            <Text as="h1">
              <Link href="/">
                <a sx={{ variant: 'link' }}>Logo</a>
              </Link>
            </Text>
          </Flex>
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
            bg="transparent"
            sx={{
              cursor: 'pointer',
              borderColor: 'secondary',
              display: 'flex',
              alignItems: 'center',
              padding: '20px 10px',
            }}
            onClick={(e) => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }}
          >
            {colorMode === 'light' ? <Emoji emoji="☀️" label="sun" /> : <Emoji emoji="🌕" label="moon" />}
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}
