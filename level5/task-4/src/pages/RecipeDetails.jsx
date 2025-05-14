import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from '../data/recipes';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div className="recipe-details">
      <Link to="/">← Back</Link>
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
