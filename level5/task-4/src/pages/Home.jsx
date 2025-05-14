import React, { useState } from 'react';
import recipesData from '../data/recipes';
import RecipeList from '../components/RecipeList';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipesData.filter(recipe => {
    const term = searchTerm.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(term) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(term)
      )
    );
  });

  return (
    <div className="home">
      <h1>Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    <RecipeList recipes={filteredRecipes} searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
