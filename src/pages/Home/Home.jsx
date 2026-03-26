import { Link } from 'react-router-dom'
import './Home.scss'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-surface-muted px-4 py-20">
      <section className="mb-15 text-center" aria-labelledby="home-heading">
        <h1 id="home-heading" className="text-5xl font-semibold leading-none">Frontend Assessment</h1>
        <p className="text-[15px] opacity-60">
          Welcome to the frontend assessment exercises
        </p>
      </section>

      <section aria-labelledby="exercises-heading">
        <h2 id="exercises-heading" className="sr-only">
          Exercises
        </h2>
        <div className="mx-auto grid max-w-225 grid-cols-1 gap-6 md:grid-cols-2">
          <article className="card">
            <div className="icon" aria-hidden="true">
              <div className="icon__lines">
                <span className="icon__line" />
                <span className="icon__line" />
                <span className="icon__line" />
              </div>
            </div>
            <h3 className="card__title">Exercise 1</h3>
            <p className="card__description">
              Build a responsive page based on the design.
            </p>
            <Link to="/exercise1" className="card__button">
              Open Exercise 1
            </Link>
          </article>

          <article className="card">
            <div className="icon" aria-hidden="true">
              <div className="icon__lines">
                <span className="icon__line" />
                <span className="icon__line" />
                <span className="icon__line" />
              </div>
            </div>
            <h3 className="card__title">Exercise 2</h3>
            <p className="card__description">
              Show tabs on desktop and accordion on mobile from data.json.
            </p>
            <Link to="/exercise2" className="card__button">
              Open Exercise 2
            </Link>
          </article>
        </div>
      </section>
    </main>
  )
}
