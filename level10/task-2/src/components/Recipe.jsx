import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipes } from '../utils/fetchFromAPI'

export default function Recipe() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    fetchRecipes(`/${id}/information`).then(setRecipe)
  }, [id])

  return (
    <div className="recipe">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      <ul>{recipe.extendedIngredients?.map(i => <li key={i.id}>{i.original}</li>)}</ul>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
    </div>
  )
}
