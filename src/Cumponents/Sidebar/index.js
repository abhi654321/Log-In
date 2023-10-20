import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../Routes'
import ShareIcon from '@mui/icons-material/Share';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Sidebar = () => {
    const navigate=useNavigate()
    
    const sidebarData = [
        {
            id:1,
            label:"Refferal & earn",
            navlink:"/refferal-and-earn",
            icon: <ShareIcon />,
        },{
            id:2,
            label:"Orders",
            navlink:"/orders",
            icon: < WorkOutlineIcon />,
        },{
            id:3,
            label:"Invoices",
            navlink:"/invoices",
            icon: < AssignmentIcon />,
        },{
            id:4,
            label:"WishList",
            navlink:"/wishList",
            icon: <FavoriteBorderIcon/>,
        },{
            id:5,
            label:"Address",
            navlink:"/address",
            icon: <LocationOnIcon /> ,
        },{
            id:6,
            label:"Notifications",
            navlink:"/notifications",
            icon:<CircleNotificationsIcon />,
        }
    ];
    const handleLogout =() => {
        localStorage.clear();
        navigate("/")
    }
  return (
    <div className='mt-1 border-r-2 h-full'>
      <List
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Account Settings
            </ListSubheader>
          }>
        {sidebarData?.map((current)=>(
            <ListItemButton key={current.id} className={window.location.pathname===current.navlink?'!bg-orange-200 rounded !text-white':" hover:!bg-orange-200 hover:!text-white"} onClick={()=>navigate(current.navlink)}>
                <ListItemIcon>{current.icon}</ListItemIcon>
                <ListItemText>{current.label}</ListItemText>
            </ListItemButton>
        ))}
        <ListItemButton className='hover:!bg-orange-200 hover:!text-white' onClick={handleLogout} >
                <ListItemIcon>{""}</ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </ListItemButton>
        
        
      </List>
      
      
    </div>
  )
}

export default Sidebar
