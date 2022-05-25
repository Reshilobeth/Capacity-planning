import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListIcon from '@mui/icons-material/List';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Navbar() {
  return (
    <div className='navbar'>

      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder='search' />
          <SearchIcon/>
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon  className='icon'/>
            English
          </div>

          {/* <div className="item">
            <DarkModeOutlinedIcon className='icon'/>
          </div> */}

          <div className="item">
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className='counter'>1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className='counter'>2</div>
          </div>
          <div className="item">
            <ListIcon className='icon'/>
          </div>
          <div className="item">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880" 
            alt="" 
            className='avatar'
            />

          </div>
          <div className="item">
            <SettingsOutlinedIcon className='icon'/>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar