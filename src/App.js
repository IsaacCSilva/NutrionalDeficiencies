import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
// import { Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
Amplify.configure(awsconfig)

function App() {
  return (
  
    <div className="App">
      <header className="App-header">


          <AmplifySignOut /> 

          <h2>Nutritional Defencies</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
