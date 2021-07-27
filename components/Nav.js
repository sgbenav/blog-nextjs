/** @jsxImportSource theme-ui */
import { Flex, Box, Button } from 'theme-ui'
import { useColorMode } from 'theme-ui'

export default function Nav() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header sx={{ height: '60px', width: '100vw' }}>
      <Flex as="nav" bg="primary">
        <Box p={2} sx={{ flex: '1 1 auto' }}>
          <h1 sx={{ margin: '0' }}>Logo</h1>
        </Box>
        <Box p={2}>
          <Button
            bg="primary"
            onClick={(e) => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }}
          >
            {colorMode === 'light' ? 'Light' : 'Dark'}
          </Button>
        </Box>
      </Flex>
    </header>
  )
}
