/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'

export default function SvgBackground() {
  return (
    <svg version="1.1" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 800">
      <g mask='url("#SvgjsMask1158")' fill="none">
        <path
          d="M 0,39 C 72,65.4 216,154.6 360,171 C 504,187.4 576,126 720,121 C 864,116 936,155.8 1080,146 C 1224,136.2 1368,86.8 1440,72L1440 800L0 800z"
          fill="#ffffff"
          sx={{ fill: 'red' }}
        ></path>
        <path
          d="M 0,300 C 57.6,332.4 172.8,447.4 288,462 C 403.2,476.6 460.8,373 576,373 C 691.2,373 748.8,459 864,462 C 979.2,465 1036.8,396.6 1152,388 C 1267.2,379.4 1382.4,412.8 1440,419L1440 800L0 800z"
          fill="#ffffff"
          sx={{ fill: 'text' }}
        ></path>
        <path
          d="M 0,597 C 96,622.6 288,718.4 480,725 C 672,731.6 768,621.4 960,630 C 1152,638.6 1344,740.4 1440,768L1440 800L0 800z"
          sx={{ fill: 'secondary' }}
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1158">
          <rect width="1440" height="800" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  )
}
