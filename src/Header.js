import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
    const [inputSearch, setInputSearch] = useState("");



  return (
    <div className='header'>
     
       <div className='menu-bar'>
      <MenuIcon className='menu-icon'/>

      <Link to="/">
        <img  className="youtube-logo"  src="/y_logo1.png" alt=""
      /></Link>
     
      </div> 

       
      <div className='search-bar'>
   <input onChange={e => setInputSearch(e.target.value)} 
   value={inputSearch} 
   type="text" 
   placeholder="Search" />

    <Link to={`/search/${inputSearch}`}>
    <SearchIcon className='search-icon' />
    </Link>
    < KeyboardVoiceIcon className='search-voice'/>

    </div>
   
    
    
    


    <div className='icons'>
    <VideoCallIcon className='create-icon'/>
    <AppsIcon  className='notification-icon'/>
    <NotificationsIcon className='sign-in-icon'/>
    <Avatar className='ava'
    alt="Nirna Bhanu"
    src="https://avatars.githubusercontent.com/u/111566435?s=400&u=67ef30d1c28ab496a8a387007b41ae92c1397fa4&v=4"/>
    </div>


 


    </div>
  )
}

export default Header
