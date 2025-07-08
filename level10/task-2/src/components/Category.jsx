import { NavLink } from 'react-router-dom'

const cuisines = ['Italian', 'American', 'Thai', 'Indian']

export default function Category() {
  return (
    <div className="category">
      {cuisines.map(cuisine => (
        <NavLink to={`/cuisine/${cuisine}`} key={cuisine}>{cuisine}</NavLink>
      ))}
    </div>
  )
}
