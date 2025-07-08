import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchRecipes } from '../utils/fetchFromAPI'
import { Link } from 'react-router-dom'

export default function Cuisine() {
  const { type } = useParams()
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetchRecipes(`/complexSearch?cuisine=${type}`).then(data => setRecipes(data.results))
  }, [type])

  return (
    <div className="grid">
      {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="card">
          <img src={`https://spoonacular.com/recipeImages/${recipe.id}-480x360.jpg`} />
          <h4>{recipe.title}</h4>
        </Link>
      ))}
    </div>
  )
}
