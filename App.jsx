import { useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    gender: '',
    button: ''

    });
  const handleChanges = (e) => {
   setValues({...values, [e.target.name]: [e.target.values]});
  }
  
  return (
   <div className ="container">
    <h1>Create a new accout</h1>
    <p>It's quick and easy</p>
    <hr></hr>
    <form>
      <label htmlFor="firstname">First name*</label>
      <input type="text" placeholder='Enter First name' name="firstname" 
      onChange={(e) => handleChanges(e)}/>
      <label htmlFor="lastname">Last name*</label>
      <input type="text" placeholder='Enter Last name' name="lastname"
      onChange={(e) => handleChanges(e)} />

      <div className="dob">
      <h3>Date of Birth:</h3>
      <input type="date" className='input-button'></input>
      </div>
      <div className="Gender">
      <label htmlFor="gender">Gender:</label>
      <input type="radio" placeholder='Enter Gender' name="gender" onChange={(e) => handleChanges(e)}/>Male
      <input type="radio" placeholder='Enter Gender' name="gender" onChange={(e) => handleChanges(e)}/>Female
      <input type="radio" placeholder='Enter Gender' name="gender" onChange={(e) => handleChanges(e)}/>Other
      </div>
      <div className='Contact'>
      <label htmlFor="mobile or Email">Mobile number or Email*</label>
      <input type="text" placeholder='mobile number or Email' name="email" onChange={(e) => handleChanges(e)} />
      <label htmlFor="password">New password</label>
      <input type="password" placeholder='Enter new password' name="password" onChange={(e) => handleChanges(e)} />
      </div>
       
      <div className='paragraph'>
        <p>People who use our service may have uploaded your contact information to facebook.<a href="">Learn more</a></p>
        <p>By clicking Sign Up you agree to our <a href="">Terms, Privacy Policy</a> and <a href="">Cookies Policies.</a><br></br>You may receive SMS notifications from us and can opt out at anytime.</p>

        <div className='button'>
          <button className='sign-up'>Sign-Up</button>
        </div>
        <p>Already have an account?</p>
      </div>

      
    </form>

   </div>
  
   
  )
}

export default App
