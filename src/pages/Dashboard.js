import { Link, useNavigate } from "react-router-dom";

export default function Dashboard({ setIsloggedIn }) {
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsloggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <p>Welcome to TechServe Solutions IT HelpDesk</p>
      <Link to="/ticket"><button>Submit Ticket</button></Link>
      <Link to="/mytickets"><button>My Tickets</button></Link>

      <button onClick={logoutHandler}>Logout</button>

      <h3>Ticket Summary</h3>
      <ul>
        <li>Open Tickets</li>
        <li>In Progress Tickets</li>
        <li>Closed Tickets</li>
      </ul>
    </div>
  );
}
