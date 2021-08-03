/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Flex, Box, Text } from 'theme-ui'

export default function Footer() {
  return (
    <Box sx={{ w: '100%', textAlign: 'center' }}>
      <Text>
        <span sx={{ mr: 1 }}>Sergio</span>
        <span sx={{ mr: 1 }}> © 2021</span>
      </Text>
    </Box>
  )
}
