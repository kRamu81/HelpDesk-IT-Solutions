import {Link} from "react-router-dom";

export default function Signup(){
    return(
        <>
        <form>
            <h1>TechServe</h1>
            <h3>Solutions</h3>

            <input type="Name" placeholder="your name" required/>
            <input type="Email" placeholder="Email here" required/>
            <input type="password" placeholder="password here" required/>
            <div>
                <Link to='/Dashboard'><button>Register</button></Link>
                <p>Already have Account?
                    <Link to='/login'><span>Login</span></Link>
                </p>
            </div>
        </form>
        </>
    )
}