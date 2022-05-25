import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import {Link} from "react-router-dom"

function Sidebar() {

    // const {darkMode} = useContext(DarkModeContext) 

  return (
    <div className='sidebar'>

        <div className='top'>
            <Link to='/' style={{textDecoration:'none'}}>
            <span className='logo'>Resadmin</span>
            </Link>
        </div>

        <hr />

        <div className='center'>
            <ul>

                <p className='title'>MAIN</p>


                
                <Link to='/' style={{textDecoration:'none'}}>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>dashboard</span>
                    </li>
                </Link>

                <p className='title'>LISTS</p>

                <Link to='/users' style={{textDecoration:'none'}}>
                    <li>
                        <GroupIcon className='icon'/>
                        <span>Users</span>
                    </li>
                </Link>
                
                <Link to='/users/product' style={{textDecoration:'none'}}>
                    <li>
                    <InventoryIcon className='icon' />
                    <span>Products</span>
                    </li>
                </Link>

                <li>
                    <ShoppingCartIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>

                <p className='title'>USEFUL</p>

                <li>
                    < AssessmentIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    < NotificationsIcon className='icon'/>
                    <span>Notification</span>
                </li>

                <p className='title'>SERVICES</p>

                <li>
                    <SettingsSystemDaydreamIcon className='icon'/>
                    <span>System health</span>
                </li>
                <li>
                    <VpnKeyIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>

                <p className='title'>USERS</p>

                <li>
                    <AccountCircleIcon  className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>

        {/* <div className='bottom'>
            <div className='colorOption ' onClick={() => dispatch({type:'LIGHT'})}></div>
            <div className='colorOption'></div>
        </div> */}
    </div>
  )
}

export default Sidebar