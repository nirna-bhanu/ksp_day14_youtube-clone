import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import  VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import  HistoryIcon from '@mui/icons-material/History';
import  OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import  WatchLaterIcon from '@mui/icons-material/WatchLater';
import  ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import  ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';





function Sidebar() {
  return (
    <div className='sidebar'>

        <SidebarRow selected Icon={HomeIcon} title="Home"  sx={{ fontSize: 40 }} />
        <SidebarRow  Icon={WhatshotIcon} title="Trending"/>
        <SidebarRow  Icon={SubscriptionsIcon} title="Subscription"/>
        <hr/>
        <h3>You</h3>
        <SidebarRow  Icon={VideoLibraryIcon} title="Library"/>
        <SidebarRow  Icon={HistoryIcon} title="History"/>
        <SidebarRow  Icon={OndemandVideoIcon} title="Your videos"/>
        <SidebarRow  Icon={WatchLaterIcon} title="Watch Icon"/>
        <SidebarRow  Icon={ThumbUpAltOutlinedIcon} title="Liked Video"/>
        <SidebarRow  Icon={ExpandMoreOutlinedIcon} title="Show more"/>
        <hr/>
        <h3>Explore</h3>
        <SidebarRow  Icon={ ShoppingBagOutlinedIcon} title="Shopping"/>
        <SidebarRow  Icon={MusicNoteOutlinedIcon} title="Music"/>
        <SidebarRow  Icon={ MovieFilterOutlinedIcon} title="Movies"/>
        <SidebarRow  Icon={SportsEsportsOutlinedIcon} title="Gaming"/>
        <SidebarRow  Icon={FeedOutlinedIcon} title="News"/>
        <SidebarRow  Icon={PodcastsOutlinedIcon} title="Podcasts"/>

    </div>
  )
}

export default Sidebar
