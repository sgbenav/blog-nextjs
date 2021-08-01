import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import { Flex, Box, Button, Text } from 'theme-ui'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export default function RecipeDetails({ post }) {
  console.log(post)
  const { featuredImage, title, content } = post.fields
  return (
    <Box as="article" sx={{ variant: 'container' }}>
      <Box as="header">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2>{title}</h2>
      </Box>
      <Box as="section">
        <Text>{documentToReactComponents(content)}</Text>
      </Box>
      <Box as="footer"></Box>
    </Box>
  )
}

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'post',
  })

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug,
  })

  return {
    props: { post: items[0] },
  }
}
