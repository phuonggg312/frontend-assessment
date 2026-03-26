import { ProductCard } from '../ProductCard/ProductCard'
import { products } from '../../data/productsData'

export function ProductGridSection() {
  return (
    <section className="bg-surface-muted" aria-labelledby="product-grid-heading">
      <div className="mx-auto flex w-full max-w-480 flex-col px-3 py-8 md:gap-12 gap-6 md:px-6 md:py-16">
        <h2 id="product-grid-heading" className="text-center text-[32px] leading-[1.2] md:text-5xl md:leading-[1.15]">
          Heading
        </h2>

        <div className="grid grid-cols-2 gap-x-1 gap-y-2 lg:gap-4 lg:grid-cols-4">
          {products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}