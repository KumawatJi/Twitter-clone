import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SidebarOption from './SidebarOption';
import { Button } from '@mui/material';
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"/>
      <SidebarOption active Icon={HomeRoundedIcon} text="Home"/>
      <SidebarOption Icon={SearchRoundedIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsNoneRoundedIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlineRoundedIcon} text="Messages"/>
      <SidebarOption Icon={BookmarkBorderRoundedIcon} text="Bookmarks"/>
      <SidebarOption Icon={ListAltRoundedIcon} text="Lists"/>
      <SidebarOption Icon={PermIdentityRoundedIcon} text="Profile"/>
      <SidebarOption Icon={MoreHorizRoundedIcon} text="More"/>
      
      <Button variant="outlined" className="sidebar__tweet"fullWidth>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar
