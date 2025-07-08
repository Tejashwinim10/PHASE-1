import axios from 'axios'

const BASE_URL = 'https://api.spoonacular.com/recipes'

export const fetchRecipes = async (url) => {
  const cache = localStorage.getItem(url)
  if (cache) return JSON.parse(cache)

  const { data } = await axios.get(`${BASE_URL}${url}`, {
    params: { apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY }
  })
  localStorage.setItem(url, JSON.stringify(data))
  return data
}
