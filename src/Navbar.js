import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-dark nav ">
        <div class="container-fluid">
        <Link to="/" className=" navbar-brand ">
           Home
      </Link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
          </div>
        
      </nav>

    </>

  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
