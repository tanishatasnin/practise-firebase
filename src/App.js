import { GoogleAuthProvider ,getAuth, signInWithPopup,  createUserWithEmailAndPassword} from "firebase/auth";

import React , { Component, useState}  from 'react';
import './App.css';
import initiallizAuthentiasion from './Firebase/FireBase.init';




initiallizAuthentiasion();
const GoogleProvider = new GoogleAuthProvider();

function App() {
  const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [error,setError]=useState('');
const [isLOgin,setIsLogin]=useState(false);
  const auth = getAuth();

  
  const handleGoogleSingIn=()=>{
    signInWithPopup(auth, GoogleProvider)
    .then(result =>{
      const user =result.user ;
      console.log(user)
    })
    
  }
  const toggolLogin=e=>{
setIsLogin (e.target.checked)
  }
  const handleEmail=e=>{
    setEmail(e.target.value);
  }
  const handlePassword=e=>{
    setPassword(e.target.value);
  }


  const handelRegistetor=e=>{
    e.preventDefault();
console.log(email,password);
if(password.length < 6){
  setError('password must be 6 charecter ')
  return;
}
createUserWithEmailAndPassword(auth, email, password)
.then(result=>{
  
  const user =result.user;
  console.log(user);
})

  }
  return (
    <div className="mx-5">
      {/* <form onClick={handelRegistetor}>
        <h1>please register</h1>
        <label htmlFor="email">Email:</label>
        <input type="text"  name="email"/>
        <br />
        <label htmlFor="password" > password:</label>
        <input type="password" name="password" id="" />
        <br />
        <br />
        <input type="submit" value="Register" />

      </form> */}
      <form onSubmit={handelRegistetor}>
  <div className="container row mb-3">
    <h1 className='text-primary'> Please {isLOgin ? 'Login': 'Register' } </h1>
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      {/* __________________ handle email ___________  */}
      <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required />
    </div>
  </div>
  <div className="container row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      {/* ______________ handle pass ____________  */}
      <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required />
    </div>
  </div>
  {/* _______________ error tezt_________  */}
  <div className='container'>
    <h3 className='text-danger'> {error}</h3>
  </div>
  <fieldset className="container row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
    <div className="col-sm-10">
      <div className="container form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
        <label className="form-check-label" htmlFor="gridRadios1">
          First radio
        </label>
      </div>
      <div className="container form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" htmlFor="gridRadios2">
          Second radio
        </label>
      </div>
      <div className="container form-check disabled">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
        <label className="form-check-label" htmlFor="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div className="container row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input onChange={toggolLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        {/* _______________ toggol____________  */}
        <label  className="form-check-label" htmlFor="gridCheck1">
          checked
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">{isLOgin ? "Login " : "register"}</button>
</form>
      <br />
      <button onClick={handleGoogleSingIn}>Google  sign in</button>
    </div>
  );
}

export default App;
