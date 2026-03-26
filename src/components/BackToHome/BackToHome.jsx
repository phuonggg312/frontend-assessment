import { Link } from 'react-router-dom'

export function BackToHome() {
  return (
    <Link
      to="/"
      className="fixed right-3 top-3 z-50 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-dark shadow-[0_2px_8px_rgba(var(--color-shadow-dark-rgb),0.08)] transition-colors duration-200 hover:border-brand hover:text-brand hover:shadow-md md:right-5 md:top-5 md:px-4 md:text-sm"
    >
      <span aria-hidden="true" className="leading-none">
        ←
      </span>
      <span>Back to Home</span>
    </Link>
  )
}
