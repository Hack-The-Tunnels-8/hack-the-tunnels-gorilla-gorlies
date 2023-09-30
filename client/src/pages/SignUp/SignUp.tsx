import { Page } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./SignUp.style.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";

function SignUp() {
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const attemptSignUp = async () => {
    const json = await ServiceAPI.signUp(email, pass);

    if (json.error !== null) {
      setMessage(json.error);
      return;
    }

    setMessage("Account created!");
    navigate("/");
  }

  return (
    <Page>
      <div className="signup-page">
        <h1>Sign Up</h1>
        <div>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
          <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}></input>
        </div>

        <button onClick={() => attemptSignUp()}>
          Sign Up
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default SignUp;
