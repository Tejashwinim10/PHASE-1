import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query) navigate(`/search/${query}`)
  }

  return (
    <form onSubmit={handleSearch} className="search">
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search recipes..." />
      <button type="submit">Go</button>
    </form>
  )
}
