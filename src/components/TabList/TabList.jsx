import { SafeContent } from '../SafeContent/SafeContent'

export function TabList({ items, activeIndex, onChange }) {
  if (!items || items.length === 0) return null

  const activeItem = items.find((item) => item.id === activeIndex)

  return (
    <div className="overflow-hidden rounded-xl border border-gray bg-white shadow-[0_8px_24px_rgba(var(--color-shadow-dark-rgb),0.06)]">
      <div className="flex border-b border-gray bg-gray-50" role="tablist" aria-label="Content tabs">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`tab-${item.id}`}
            aria-controls={`panel-${item.id}`}
            aria-selected={activeIndex === item.id}
            tabIndex={activeIndex === item.id ? 0 : -1}
            onClick={() => onChange(item.id)}
            className={`flex-1 border-b-2 px-4 py-3 font-semibold transition-all duration-200 cursor-pointer ${
              activeIndex === item.id
                ? 'border-brand text-brand'
                : 'border-transparent text-gray-600 hover:text-brand'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          role="tabpanel"
          id={`panel-${activeItem.id}`}
          aria-labelledby={`tab-${activeItem.id}`}
          className="min-h-[200px] p-5 leading-relaxed text-dark"
        >
          <SafeContent content={activeItem.content} />
        </div>
      ) : null}
    </div>
  )
}
