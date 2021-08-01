/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'

export default function Emoji({ emoji, label }) {
  return (
    <span sx={{ variant: 'emoji' }} role="img" aria-label={label ? label : ''} aria-hidden={label ? 'false' : 'true'}>
      {emoji}
    </span>
  )
}
