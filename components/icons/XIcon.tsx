import { SVGProps } from 'react'

/**
 * Heroicon name: x
 *
 * @param {SVGProps<SVGSVGElement>} props
 */
export const XIcon = ({ ...svgProps }: SVGProps<SVGSVGElement>) => (
  <svg
    className="h-6 w-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    {...svgProps}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

export default XIcon
