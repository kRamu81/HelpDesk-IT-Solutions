import {Link} from "react-router-dom";
import "./login.css"

export default function Signup(){
    return(
        <>
        <div className="loginpage">
            <div className="container">
                <div className="left">
                    <h1>Welcome</h1>
                </div>
                <div className="right">
                    <form>
                       <h2>Register</h2>

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
                </div>
            </div>
        </div>
        </>
    )
}