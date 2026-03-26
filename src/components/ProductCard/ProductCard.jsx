import productDesktop from '../../assets/images/product-desktop.webp'
import productMobile from '../../assets/images/product-mobile.webp'

export function ProductCard({ brand, title, price, oldPrice, href, image }) {
  const imageAlt = image?.alt || `${title} product image`
  const desktopImage = image?.desktop || productDesktop
  const mobileImage = image?.mobile || productMobile
  return (
    <div
      className="
        group flex w-full flex-col bg-brand
        shadow-[0_0_16.1px_rgba(0,0,0,0.25)]
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.32)]
        md:shadow-[0_0_16.1px_rgba(0,0,0,0.5)]
        md:hover:shadow-[0_10px_28px_rgba(0,0,0,0.55)]
      "
    >
      <a href={href || '#'} className="flex flex-col">
        <div className="aspect-[173.5/276] h-full w-full overflow-hidden md:aspect-[456/710]">
          <picture className="block h-full w-full">
            <source media="(min-width: 768px)" srcSet={desktopImage} />
            <img
              loading="lazy"
              src={mobileImage}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="flex flex-col gap-1 p-2 text-[10px] leading-normal text-primary md:px-3 md:py-2 md:text-[12px] md:leading-3.5">
          <p className="font-medium md:font-normal">{brand}</p>

          <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:justify-between md:gap-0">
            <h3 className="font-normal">{title}</h3>
            <div className="flex items-center gap-2">
              <span>{price}</span>
              {oldPrice && (
                <span className="text-secondary line-through">{oldPrice}</span>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}