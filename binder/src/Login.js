import React, {useState, useEffect} from 'react'; 
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom'; 
import fire from './fire';  
import './Login.css';

const LoginPage = (props) =>
{   const{
        email, 
        setEmail,  
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
    } = props; 

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input 
                type = "text" 
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className = "errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                type = "password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className ="errorMsg">{passwordError}</p>
                <div className = "btnContainer">
                    {hasAccount ? (
                        <>
                        <button className ="SignIn"onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ):
                    (
                        <>
                        <button className="SignUp" onClick ={handleSignUp}>Register</button>
                        <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}


function Login() {

  const[user, setUser] = useState(""); 
  const[email, setEmail] = useState(""); 
  const[password, setPassword] = useState(""); 
  const[emailError, setEmailError] = useState(""); 
  const[passwordError, setPasswordError] = useState(""); 
  const[hasAccount, setHasAccount] = useState(false); 
  let history = useHistory(); 

  const clearInputs = () => {
    setEmail(""); 
    setPassword("");
  }; 

  const isLoggedIn = () =>
  {
    if(user)
      console.log("Working")
      history.push("/home"); 
  }
  
  const clearErrors = () => 
  {
    setEmailError(""); 
    setPasswordError(""); 
  };

  const handleLogin = () =>
  {
    clearErrors(); 
    fire 
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code)
        {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message); 
            break; 
          case "auth/wrong-password":
            setPasswordError(err.message); 
            break; 
          default:
        }
      }); 
      isLoggedIn();
    }; 

    const handleSignUp = () =>
    {
      clearErrors(); 
      fire 
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message); 
              break; 
          case "auth/weak-password":
            setPasswordError(err.message); 
            break; 
          default:
        }
      }); 
      isLoggedIn();
    }

  const handleLogout = () =>
  {
    fire.auth().signOut(); 
  }; 

  const authListener = () =>
  {
    fire.auth().onAuthStateChanged(user => 
      {
        clearInputs(); 
        if(user)
        {
          setUser(user); 
        }
        else{
          setUser(""); 
        }
      }); 
  }; 

  useEffect(() => 
  {
    authListener(); 
  }, []); 

  return (
    <div className="Login">
        <LoginPage
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
    </div>
  );
};

export default Login;
