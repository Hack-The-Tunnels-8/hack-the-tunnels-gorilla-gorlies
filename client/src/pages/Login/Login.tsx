import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login(email, pass);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  console.log(email);
  console.log(pass);
  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <div>
          <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
          <input type="text" id="pass" value={pass} onChange={(e)=>setPass(e.target.value)}></input>
        </div>
        <button onClick={() => attemptLogin()}>
          Login (as user set in code)
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;
