import { useEffect, useState } from 'react'
import { fetchRecipes } from '../utils/fetchFromAPI'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetchRecipes('/random?number=9&tags=vegetarian').then(data => setRecipes(data.recipes))
  }, [])

  return (
    <div className="grid">
      {recipes.map(recipe => (
        <motion.div whileHover={{ scale: 1.05 }} key={recipe.id} className="card">
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
