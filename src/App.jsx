import { useState } from 'react'
import './App.css';
import authConfig from './Firebase/auth';
function App() {

  const loginDetails = [
    {
      email:"",
      password:""
    }
  ]
  const [SignUp,setSignUp] = useState(loginDetails);
  const handleSignUp = async (e) =>{
    e.preventDefault()
    const user = await authConfig.createUser(SignUp);
  }

  const handleSignIn = async (e) =>{
    e.preventDefault()
    await authConfig.userSignIn(SignUp).then((userData) => {
      console.log(userData.user.uid)
    })
  }
  
  return (
    <>
   
    </>
  )
}

export default App
