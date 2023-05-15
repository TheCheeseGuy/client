import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
function Nav() {
    return (
        <section>
            <div className="mnu-br2">
                <div className="container">
                    <nav className="rd4">
                        <ul>
                            <li><Link to = "/"><div>Home</div></Link></li>
                            <li><CustomLink to = "/staff"><div>Meet the staff</div></CustomLink></li>
                            <li><CustomLink to = "/request-form "><div>Request Form</div></CustomLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

function CustomLink({ to, children, ...props}){
    const resolvedPath =  useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive? "active": ""}>
            <Link to ={ to }{ ... props}>
                {children}
            </Link>
        </li>
    )
}

export default Nav