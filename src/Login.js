import { useState, useReducer } from "react";

function validate(state, action){
  if(action.type === 'signIn'){
    //Aquí no saldrá el console Sign In ya que se actualiza la página
    console.log("Sign In")
      return{
        ...state,
        username:{
          value:action.payload,
          isValid:true
        }
      }
  }
  if(action.type === 'signUp'){
    console.log("Sign Up")
      return{
        ...state,
        username:{
          value:action.payload,
          isValid:true
        }
      }
  }
  if(action.type === 'signOut'){
    console.log("Sign Out")
      return{
        ...state,
        username:{
          value:action.payload,
          isValid:true
        }
      }
  }
  return state;
}

const initialFormState = {
  username:{
    value:" ",
    isValid:false
  }
}

function Login() {
const [FormState, dispatch] = useReducer(validate,initialFormState);
const [ username, setUsername ] = useState('')

function handleUsername(e){
    setUsername(e.target.value);
}

  return (
    <div className="login">
    <form onSubmit={e => {dispatch({type:'signIn', payload:username})}}>
      <label htmlFor="login-username">Username:</label>
      <input type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Sign In" disabled={username.length === 0} />
    </form>
    <div className="button-div"><button onClick={e => {dispatch({type:'signUp', payload:username})}}>Sign Up</button></div>
    <div className="button-div"><button onClick={e => {dispatch({type:'signOut', payload:username})}}>Sign Out</button></div>
    
    </div>
  )
}

export default Login