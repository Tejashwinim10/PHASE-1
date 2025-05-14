import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};

const RecipeCard = ({ recipe, searchTerm }) => (
  <div className="recipe-card">
    <Link to={`/recipe/${recipe.id}`}>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h3 dangerouslySetInnerHTML={{ __html: highlightText(recipe.title, searchTerm) }} />
    </Link>
  </div>
);

export default RecipeCard;
