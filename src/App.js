import { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromUrl } from './authentication';
import Login from './components/Login';
import User from './components/User';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './stateProvider/StateProvider';
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("user=>",user);
      })
    }
    console.log('mytoken =>', token);

  }, []);

  return (
    <div className="App">
      {token ? <User/> : <Login/>}
    </div>
  );
}

export default App;
