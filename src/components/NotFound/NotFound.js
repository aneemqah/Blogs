import { Link } from 'react-router-dom';
import '../NotFound/index.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Hmmm</h2>
      <p>
        Sorry, can't find that page. Would you like to go back to the
        <Link to="/"> homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
