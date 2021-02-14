import React from 'react';
import './LeftSideBar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SideBarOptions from './SideBarOptions';
import { Button } from '@material-ui/core';

function LeftSideBar() {
    return (
        <div className="leftsidebar">
            <TwitterIcon className="leftsidebar_twitter_logo"/>
            <SideBarOptions active Icon = {HomeIcon} text="Home" />
            <SideBarOptions Icon = {SearchIcon} text="Explore"/>
            <SideBarOptions Icon = {NotificationsNoneIcon} text="Notifications"/>
            <SideBarOptions Icon = {MailOutlineIcon} text="Message"/>
            <SideBarOptions Icon = {BookmarkBorderIcon} text="Bookmarks"/>
            <SideBarOptions Icon = {ListAltIcon} text="Lists"/>
            <SideBarOptions Icon = {PermIdentityIcon} text="Profile"/>
            <SideBarOptions Icon = {MoreHorizIcon} text="More"/> 
            <Button className="leftsidebar_button">Tweet</Button>
        </div>
    )
}

export default LeftSideBar
