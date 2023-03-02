import React from "react";
import { useStateValue } from "../stateProvider/StateProvider";
import './Body.css';
import Header from "./Header";

function Body({spotify}) {
  const [{topInfo},dispatch] = useStateValue()
  console.log("this is top info==>",topInfo)
  return (
    <div className="body">
      <Header spotify = {spotify}/>

      <div className="body_info">
        <img src={topInfo?.images[0].url}/>
        <div className="body_infoText">
        <strong>Playlist</strong>
        <h2>{topInfo?.name}</h2>
        <p>{topInfo?.description}</p>
        </div>
      </div>

      <div className="body_songs">
      <div className="body_icons">

      </div>
      </div>
    </div>
  )
}

export default Body