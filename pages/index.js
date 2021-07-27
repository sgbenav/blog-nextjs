/** @jsxImportSource theme-ui */
import Head from 'next/head'
import { Container, Text } from 'theme-ui'

export default function Home() {
  return (
    <Container as="main" bg={'colors.background'} sx={{ variant: 'container', height: `calc(100vh - 60px)` }}>
      <Text sx={{ fontSize: 8, my: 0 }}>HERE</Text>
    </Container>
  )
}
