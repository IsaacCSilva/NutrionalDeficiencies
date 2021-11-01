import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import Linegrph from './components/Linegrph'
// import { Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
Amplify.configure(awsconfig)

function App() {
  return (
  
    <div className="App">
      <header className="App-header">

        <div className="head">

          <h2 className = "title">Nutrigoals</h2>
                          <button className="home" >Home</button>
                <button className="recommended">Recommendations</button>

                <button className= "profile" 
         >Profile</button>
                   <AmplifySignOut> </AmplifySignOut > 

</div>
<div className="chart">
<Linegrph/>

</div>

      </header>
      <div className="application">
      <button className="DailyValue" >+ Add Test Result</button>
      <button className="TestResult">+ Add Daily Value</button>


</div>

    </div>

  );
}

export default withAuthenticator(App);