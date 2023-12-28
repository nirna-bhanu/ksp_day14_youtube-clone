import { Avatar } from '@mui/material'
import React from 'react'
import './VideoCard.css'


function VideoCard({image,title,channel,views,timestamp,channelimage}) {
  return (
    <div className='videoCard'>
        <img className='videoCard_thumbnail' src={image} alt=''/>
        <div className='Video_info' >


            <Avatar 
            className='videoCard_avatar' 
            alt={channel} 
            src={channelimage}
            />

            <div className='video_text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views}  ● {timestamp}
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default VideoCard
