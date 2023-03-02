import { Favorite, MoreHoriz, PlayCircle } from "@mui/icons-material";
import React from "react";
import { useStateValue } from "../stateProvider/StateProvider";
import './Body.css';
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ topInfo }, dispatch] = useStateValue()
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={topInfo?.images[0].url} />
        <div className="body_infoText">
          <strong>Playlist</strong>
          <h2>{topInfo?.name}</h2>
          <p>{topInfo?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircle className="body_shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {topInfo?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body