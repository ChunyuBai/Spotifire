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
        <img src="https://i.scdn.co/image/ab67616d0000b2738630e6875c1e035c543d9b53" className="album"/>
        <div className="songInfo">
          <h4>真夜中のドア / STAY WITH ME</h4>
          <br/>
          <p>Rainych</p>
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