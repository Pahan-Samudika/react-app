import {useNavigate} from 'react-router-dom'
import './App.css';
function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Sign Up Page</h1>
        <button className='signup-button' onClick={() => navigate('/users')}>Sign Up</button>
      </header>
    </div>
  );
}

export default App;
