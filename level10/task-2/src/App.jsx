import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Recipe from './components/Recipe'
import Search from './components/Search'
import Category from './components/Category'
import Cuisine from './pages/Cuisine'
import SearchResults from './pages/SearchResults'

export default function App() {
  return (
    <>
      <Category />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </>
  )
}
