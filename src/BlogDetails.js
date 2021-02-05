import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

export default function BlogDetails() {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    function handleDelete() {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div>
            { isPending && <div>Loading</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article className="blog-details">
                    <h2>{ blog.title }</h2>
                    <p>by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    )
}