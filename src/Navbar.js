import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <>

      <b><h1 className="text-white  mt-2">Flight Delay Info</h1></b>
        <div class="container-fluid text-center site-title " >
        <Link to="/" className=" navbar-brand ">
           Home
      </Link>
     
          </div>
        
      

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
