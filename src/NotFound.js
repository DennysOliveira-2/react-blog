import { Link } from "react-router-dom";

export default function NotFound () {
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page couldn't be found.</p>
            <Link to="/">Click here to go to the Homepage</Link>
        </div>
    )
}