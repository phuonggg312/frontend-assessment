import { SafeContent } from '../SafeContent/SafeContent'

export function AccordionList({ items, activeIndex, onChange }) {
  if (!items || items.length === 0) return null

  return (
    <div className="overflow-hidden rounded-xl border border-gray bg-white shadow-[0_8px_24px_rgba(var(--color-shadow-dark-rgb),0.06)]">
      {items.map((item) => {
        const isOpen = activeIndex === item.id

        return (
          <div key={item.id} className="border-b border-gray last:border-b-0">
            <button
              type="button"
              id={`accordion-btn-${item.id}`}
              aria-controls={`accordion-panel-${item.id}`}
              aria-expanded={isOpen}
              onClick={() => onChange(item.id)}
              className="flex w-full items-center justify-between px-4 py-3.5 text-left transition-colors hover:bg-gray-50"
            >
              <span className="font-semibold text-gray-600">{item.title}</span>
              <span
                aria-hidden="true"
                className={`inline-grid h-5 w-5 place-items-center rounded-full text-brand transition-all duration-200 ${
                  isOpen ? 'rotate-180 bg-gray-300' : 'bg-gray-100'
                }`}
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <div
              id={`accordion-panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-btn-${item.id}`}
              aria-hidden={!isOpen}
              className={`overflow-hidden px-4 leading-relaxed text-dark transition-all duration-300 ${
                isOpen ? 'max-h-150 pb-4 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <SafeContent content={item.content} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
