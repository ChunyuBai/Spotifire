import React from "react";
import './Footer.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleOnTwoToneIcon from '@mui/icons-material/ShuffleOnTwoTone';
import { Grid, Slider } from "@mui/material";
import { VolumeDown } from "@mui/icons-material";
import { PlaylistPlay } from "@mui/icons-material";


function Footer() {
  
  return (
    <div className="footer">
      <div className="footerLeft">
        <img src="" className="album"/>
        <div className="songInfo">
          <h4>Yeah!</h4>
          <br/>
          <p>User</p>
        </div>
      </div>

      <div className="footerCenter">
        <ShuffleOnTwoToneIcon className="footer_green"/>
        <SkipPreviousIcon className="footer_icon"/>
        <PlayCircleIcon className="footer_icon"/>
        <SkipNextIcon className="footer_icon"/>
        <RepeatIcon className="footer_green"/>
      </div>

      <div className="footerRight">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer