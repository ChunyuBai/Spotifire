import React from "react";
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from "../stateProvider/StateProvider";
function Sidebar() {
  const [{playlists},dispatch] =useStateValue()
  console.log(playlists)
  return (
    <div className="sidebar">
      <img className="sidebarLogo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
      <SidebarOption option="Home" Icon={HomeIcon}/>
      <SidebarOption option="Search" Icon={SearchIcon}/>
      <SidebarOption option="Your Library" Icon={LibraryMusicIcon}/>
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map(playlist => (<SidebarOption option={playlist.name}/>))}
    </div>
  )
}

export default Sidebar