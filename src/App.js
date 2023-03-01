import { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromUrl } from './authentication';
import Login from './components/Login';
import User from './components/User';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from './stateProvider/StateProvider';
const spotify = new SpotifyWebApi();

function App() {
  const [{user,token}, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type:'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
    }
  }, []);

  return (
    <div className="App">
      {token ? <User spotify = {spotify}/> : <Login/>}
    </div>
  );
}

export default App;
