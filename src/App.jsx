import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Exercise1 from './pages/Exercise1/Exercise1'
import Exercise2 from './pages/Exercise2/Exercise2'
import Home from './pages/Home/Home'

const PAGE_TITLES = {
  '/': 'Home — Frontend Assessment',
  '/exercise1': 'Exercise 1 — Responsive page — Frontend Assessment',
  '/exercise2': 'Exercise 2 — Tabs & accordion — Frontend Assessment',
}

function SEOManager() {
  const { pathname } = useLocation()
  
  const canonicalUrl = `${window.location.origin}${pathname}`
  const title = PAGE_TITLES[pathname] ?? 'Frontend Assessment'

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEOManager />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise1" element={<Exercise1 />} />
            <Route path="/exercise2" element={<Exercise2 />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App