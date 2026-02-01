import { Link, useNavigate } from "react-router-dom";
import "../styles/main.css"


export default function Navbar({ isloggedIn, setIsloggedIn }) {
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsloggedIn(false);
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <h1>TechServe Solutions</h1>

        {!isloggedIn && (
          <Link to="/login"> <button>Login</button></Link>
        )}

        {isloggedIn && (
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/ticket">Submit Ticket</Link></li>
            <li><Link to="/mytickets">My Tickets</Link></li>
            <li><Link to="/admin">Admin Dashboard</Link></li>
            <button onClick={logoutHandler}>Logout</button>
          </ul>
        )}
      </ul>
    </nav>
  );
}
