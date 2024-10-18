import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Accessingcourse() {
  const { state } = useLocation();
  var [link,setLink] = useState()
  var [title,setTitle] = useState()
  console.log(state);
  console.log(state.videos[0].videolink)

  useEffect(()=>{
       setLink(state.videos[0].videolink)
       setTitle(state.videos[0].videotitle)
  },[])

  function changevideo(video){
    console.log("hiii")
     setLink(video.videolink)
     setTitle(video.videotitle)
  }

  return (
    <div className='m-4 pt-4 border border-success d-flex justify-content-evenly'>
      <div className='mt-4' >
        <iframe
          width="680"
          height="425"
          src={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
         <div className='d-flex'>
            <h4>Video Title :  </h4>
            <h4> {title}</h4>
         </div>
      </div>

      <div  style={{height:"80vh",overflowY:'auto'}} >
        {
            state.videos.map((video)=>{
               return <div className='border p-2 m-2' onClick={()=>{changevideo(video)}}>
                             {
                                video.videotitle
                             }
                      </div>
            })
        }
      </div>
    </div>
  );
}

export default Accessingcourse;
