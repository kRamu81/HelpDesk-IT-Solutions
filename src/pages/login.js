import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({ setIsloggedIn }) {
  const navigate = useNavigate();

  const login = () => {
    setIsloggedIn(true);
    navigate("/dashboard");
  };

  return (
    <>
    <div className="loginpage">
      <div className="container">
      <div className="left">
      <h1>Welcome</h1>
      <h3>TechServe Solutions</h3>
      <p> we Launching soon.</p>
    </div>
    <div className="right">
      <h2>Login</h2>
      <input type="email" placeholder="Your Email" />
      <input type="password" placeholder="Your Password" />
      <button onClick={login}>Login</button>
      <p>
        Don't have an account?
        <Link to="/signup"><span> Register</span></Link>
      </p>
    </div>
    </div>
    </div>
    </>
  );
}
