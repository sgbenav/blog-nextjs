/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import { Card, Text } from 'theme-ui'

export default function PostCard({ post }) {
  const { title, slug, thumbnail } = post.fields
  console.log(thumbnail)
  return (
    <Card
      sx={{
        maxWidth: 256,
      }}
    >
      <div>
        {/* Image */}
        <Image
          src={`http:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div>
        {/* Title */}
        <Text>Card</Text>
      </div>
      <div>
        {/* Actions */}
        <Link href={`/blog/${slug}`}>
          <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>{slug}</a>
        </Link>
      </div>
    </Card>
  )
}
