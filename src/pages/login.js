import { Link, useNavigate } from "react-router-dom";

export default function Login({ setIsloggedIn }) {
  const navigate = useNavigate();

  const login = () => {
    setIsloggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>TechServe</h1>
      <h3>Solutions</h3>

      <input type="email" placeholder="Your Email" />
      <input type="password" placeholder="Your Password" />
      <button onClick={login}>Login</button>
      <p>
        Don't have an account?
        <Link to="/signup"><span> Register</span></Link>
      </p>
    </div>
  );
}
