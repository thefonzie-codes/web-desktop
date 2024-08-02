import { Link, useNavigate } from "react-router-dom";

export default function Nav() {

  const navigate = useNavigate();

  return (
    <nav>
      <button className="logo" onClick={() => navigate('home')}>
        <h2>Done?</h2>
      </button>
      <div className="nav-links">
        <Link to='/home'>Home</Link>
      </div>
    </nav>
  );
}