import { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromUrl } from './authentication';
import Login from './components/Login';
function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }
    console.log('mytoken =>', token);

  }, []);

  return (
    <div className="App">
      {token ? <h1>login success</h1> : <Login/>}
    </div>
  );
}

export default App;
