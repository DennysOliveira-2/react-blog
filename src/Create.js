import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Create(){
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('Mario');
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        const blog = {
            title, body, author
        }
        
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new post</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value='Mario'>Mario</option>
                    <option value='Yoshi'>Mario</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                
            </form>
        </div>
    )
}