import { createClient } from 'contentful'
import PostCard from '../../components/PostCard'

export default function Blog({ posts }) {
  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.sys.id} post={post} />
      ))}
    </section>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: res.items,
    },
  }
}
