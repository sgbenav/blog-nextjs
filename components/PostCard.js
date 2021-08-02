/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from 'react'
import { Card, Text, Box } from 'theme-ui'
import Link from 'next/link'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'

export default function PostCard({ post }) {
  const [readingTime, setReadingTime] = useState(null)
  const ref = useRef()
  const { title, slug, thumbnail, content, summary } = post.fields

  useEffect(() => {
    const words = ref.current?.innerText.length
    const WPS = 275 / 60
    setReadingTime(Math.ceil(words / WPS / 60))
  }, [readingTime])

  return (
    <Card sx={{ variant: 'card' }}>
      <Link sx={{ cursor: 'pointer' }} href={`/blog/${slug}`}>
        <a sx={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>
          <Box
            variant="cardImage"
            sx={{
              width: '100%',
              height: '200px',
              backgroundImage: `url(https:${thumbnail.fields.file.url})`,
            }}
          />
          <Box sx={{ p: 4 }}>
            <Box sx={{ overflow: 'hidden' }}>
              <Text as="h3" variant="cardTitle">
                {title}
              </Text>
              <Text variant="cardSummary">{documentToReactComponents(summary)}...</Text>
              <Text sx={{ display: 'none' }} ref={ref}>
                {documentToReactComponents(content)}...
              </Text>
            </Box>
            <p>{readingTime} min read</p>
          </Box>
        </a>
      </Link>
    </Card>
  )
}
