import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="navbar">
            <Link to="/"><h1>My React Blog</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
    )
}

