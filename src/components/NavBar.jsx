import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <div>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/staff">Staff</NavLink>
      </div>
    </nav>
  )
}
