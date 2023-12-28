import React from 'react'
import "./ChannelRow.css"
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function ChannelRow({image, channel,subs,noOfVideos,descirption,verified}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow_logo'
        alt={channel} src={image} />

        <div className='channelRow_text'>
            <h4>{channel} {verified && <VerifiedIcon className='vrIcon'/>} </h4> 

            <p>{subs} subscribers  ● {noOfVideos} videos</p>

            <p>{descirption}</p>
            <button className='channelRow_subscribeButton'>Subscribe</button>
        </div>

    </div>
  )
}

export default ChannelRow
