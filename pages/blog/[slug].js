import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export default function RecipeDetails({post}) {
  return (
    <div>
      Recipe Details
    </div>
  )
}

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'post'
  })

  const paths = res.items.map(item => ({
    params: {slug: item.fields.slug}
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  const { items } = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug
  })

  return {
    props: { post: items[0]}
  }

}