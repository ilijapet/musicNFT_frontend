import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import './App.css';
import SignInSide from './components/signInSide';
import SignUp from './components/signUp';
import Logout from './components/logout';
import UserProfile from './components/userProfile';



function App() {
  return (
    <Router>
        <React.StrictMode>
          <Switch>
            <Route exact path="/" component={SignInSide}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/profile" component={UserProfile}/>
            TODO: add password restart path
          </Switch>
        </React.StrictMode>
      </Router>
    );
}

export default App;
