import React, { useRef } from 'react'
import './Video.css'
import video from '../../assets/video.mp4'
const Video = ({playstate, setPlaystate}) => {
const player =useRef(null)
const closeplayer= (e)=>{
    if(e.target === player.current){
        setPlaystate(false);
    }
}

  return (
    <div className={`videoplayer ${playstate ? '': 'hide'}`} ref={player} onClick={closeplayer}>
      <video src={video} autoplay muted controls></video>
    </div>
  )
}

export default Video
