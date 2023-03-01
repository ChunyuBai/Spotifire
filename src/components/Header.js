import React from 'react'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import './Header.css';
import { useStateValue } from '../stateProvider/StateProvider';
function Header() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className='header'>
      <div className='headerLeft'>
        <SearchTwoToneIcon/>
        <input placeholder='Search for Artists, Songs' type="text"/>
      </div>

      <div className='headerRight'>
        <AccountCircleTwoToneIcon src = {user?.images[0]?.url}/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
    
  )
}

export default Header