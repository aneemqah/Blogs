import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../Create/index.css';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [img_url, setImage] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieBlog = { title, author, body, img_url };
    //console.log(movieBlog);

    fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieBlog),
    })
      .then(() => {
        console.log('movie added');
      })
      .then(() => {
        navigate('/');
      });
  };

  return (
    <div className="create">
      <h2>Add a Movie Review</h2>
      <form onSubmit={handleSubmit}>
        <label>Movie Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Review:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Image</label>
        <input
          type="text"
          required
          value={img_url}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <label>Reviewer:</label>
        <select
          defaultValue={'Default'}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Default" disabled>
            Please select
          </option>
          <option value="arti">Arti</option>
          <option value="bryan">Bryan</option>
          <option value="chris">Chris</option>
          <option value="cristina">Cristina</option>
          <option value="meena">Meena</option>
          <option value="pablo">Pablo</option>
        </select>
        <button>Save</button>
      </form>
    </div>
  );
};
export default Create;
