import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchRecipes } from '../utils/fetchFromAPI'
import { Link } from 'react-router-dom'

export default function SearchResults() {
  const { query } = useParams()
  const [results, setResults] = useState([])

  useEffect(() => {
    fetchRecipes(`/complexSearch?query=${query}`).then(data => setResults(data.results))
  }, [query])

  return (
    <div className="grid">
      {results.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="card">
          <img src={`https://spoonacular.com/recipeImages/${recipe.id}-480x360.jpg`} />
          <h4>{recipe.title}</h4>
        </Link>
      ))}
    </div>
  )
}
