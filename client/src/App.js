import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignInSide from './components/SignInSide';

function App() {
  console.log(process.env.REACT_APP_BACKEND_HOST)
  return (
      <SignInSide />
    );
}

export default App;
