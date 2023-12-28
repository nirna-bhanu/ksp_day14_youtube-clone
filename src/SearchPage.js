import React from 'react';
import  TuneOutlinedIcon  from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import  VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_filter'>
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
    </div>
    <hr/>

    <ChannelRow
    image="https://avatars.githubusercontent.com/u/111566435?s=400&u=67ef30d1c28ab496a8a387007b41ae92c1397fa4&v=4"
    channel="Nirna Bhanu"
    verified
    subs="740k"
    noOfVideos={220}
    descirption="Explore Nirna Bhanu's diverse content – from cooking delights to life hacks, travel gems, and tech updates. Join 740k subscribers for 220 videos of expert tips and engaging adventures. Subscribe for a daily dose of inspiration!"/>

<hr/>

<VideoRow
views="2.8M Views"
subs="740k"
descirption="Join me on a virtual tour to exotic destinations around the world. "
timestamp="1 week ago"
channel="Nirna Bhanu"
title="Discovering Hidden Paradises: A Travel Adventure "
image="https://i.ytimg.com/vi/UIJcutkljpM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjBD7ywxcnIoib7NW06XNlISwFkA"

/>

<VideoRow
views="1.5M Views"
subs="740k"
descirption="Explore the latest tech gadgets and stay updated on the tech world."
timestamp="5 days ago"
channel="Nirna Bhanu"
title="Unboxing the Future: Coolest Tech Gadgets of the Year"
image="https://i.ytimg.com/vi/0YoPpEIS3o4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEpmelhAJPoV5JKSQ0nH4rfObjTQ"

/>

<VideoRow
views="1.2M Views"
subs="740k"
descirption="Embark on a fitness journey with me and achieve a healthier lifestyle."
timestamp="4 days ago"
channel="Nirna Bhanu"
title=" Get Fit: 30 Days to a Healthier You "
image="https://i.ytimg.com/vi/lcB0LYNp0oI/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_g6AArgIigIMCAAQARgyIFUofzAP&rs=AOn4CLCrbnLe-LK4QgQAEBv9vRFg2M1VDQ"

/>
<VideoRow
views="900k Views"
subs="740k"
descirption="Learn simple yet effective life hacks to make your daily routine more enjoyable. "
timestamp="2 weeks ago"
channel="Nirna Bhanu"
title="Life Hacks: Making Everyday Tasks Easier"
image="https://i.ytimg.com/vi/f9Piqp9g5Pk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfiEhuE32UoBPuFFXV_rHoAOfAKQ"

/>
<VideoRow
views= '1.4M Views'
subs= '767k'
description= 'Explore the culinary world and learn how to cook delicious meals at home.'
timestamp= '3 days ago'
channel= 'Nirna Bhanu'
title= 'Mastering the Art of Cooking: A Beginner'
image= 'https://i.ytimg.com/vi/bsYzWK3cxOM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD-_OtE3hpQgQ5MLtvOVL4yH3Tz8g'
/>





    </div>
   
  )
}

export default SearchPage
