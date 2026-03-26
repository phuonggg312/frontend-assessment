import { useState } from 'react'
import { BackToHome } from '../../components/BackToHome/BackToHome'
import { TabList } from '../../components/TabList/TabList'
import { AccordionList } from '../../components/AccordionList/AccordionList'
import data from '../../data/data.json'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const firstItemId = data[0]?.id

export default function Exercise2() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [activeIndex, setActiveIndex] = useState(() =>
    firstItemId !== undefined ? firstItemId : -1
  )

  const effectiveActiveIndex =
    !isMobile && activeIndex === -1 && firstItemId !== undefined
      ? firstItemId
      : activeIndex

  function handleChange(index) {
    if (isMobile) {
      setActiveIndex((prev) => (prev === index ? -1 : index))
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <main id="main-content" className="mx-auto max-w-225 px-4 pb-14 pt-24 md:pt-28">
      <BackToHome />
      <header className="mb-5 text-center">
        <h1 className="m-0 text-4xl font-bold text-black">Exercise 2</h1>
        <p className="mt-2 text-base text-gray-600">
          Tabs on desktop and accordion on mobile.
        </p>
      </header>

      {isMobile ? (
        <AccordionList
          items={data}
          activeIndex={effectiveActiveIndex}
          onChange={handleChange}
        />
      ) : (
        <TabList
          items={data}
          activeIndex={effectiveActiveIndex}
          onChange={handleChange}
        />
      )}
    </main>
  )
}