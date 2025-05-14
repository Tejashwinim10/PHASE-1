import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

const RecipeList = ({ recipes, searchTerm }) => (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} searchTerm={searchTerm} />
      ))}
    </div>
  );
  

export default RecipeList;
