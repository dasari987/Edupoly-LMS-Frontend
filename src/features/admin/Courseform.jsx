import React, { useState } from 'react';
import { useCourseaddingMutation } from '../../services/courses';
import { useNavigate } from 'react-router-dom';


function Courseform() {

    var [courseaddFn] = useCourseaddingMutation()
    var navigate = useNavigate();

  const [coursename, setCoursename] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [trainer, setTrainer] = useState('');
  const [image, setImage] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [videos, setVideos] = useState([{ videotitle: '', videolink: '' }]);


  const addVideo = () => {
    setVideos([...videos, { videotitle: '', videolink: '' }]);
  };

  const handleVideoChange = (index, event) => {
    const { name, value } = event.target;
    const updatedVideos = [...videos];
    updatedVideos[index][name] = value;
    setVideos(updatedVideos);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const newCourseDetails = {
      coursename,
      price,
      duration,
      trainer,
      image,
      technologies,
      videos,
    };
    
    console.log(newCourseDetails);

        var data = await courseaddFn(newCourseDetails)
        console.log("llll",data)
        console.log("llll",data.msg)
        if (data.data.msg==='course saved') {
            console.log("dta",data)
            navigate("/home")
        }
        else{
            console.log("errrrrrr","error ")
        }
  };


  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
      <div className="text-center border border-dark rounded p-4">
        <form>
          <input
            type="text"
            name="coursename"
            placeholder="coursename"
            className="m-2"
            value={coursename}
            onChange={(e) => setCoursename(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="price"
            placeholder="price"
            className="m-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="duration"
            placeholder="duration"
            className="m-2"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="trainer"
            placeholder="trainer"
            className="m-2"
            value={trainer}
            onChange={(e) => setTrainer(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="image"
            className="m-2"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="technologies"
            placeholder="technologies"
            className="m-2"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
          />
          <br />

          <div id="vdo">
            {videos.map((video, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="videotitle"
                  placeholder="videotitle"
                  value={video.title}
                  onChange={(e) => handleVideoChange(index, e)}
                  className="m-2"
                />
                <input
                  type="text"
                  name="videolink"
                  placeholder="videolink"
                  value={video.link}
                  onChange={(e) => handleVideoChange(index, e)}
                  className="m-2"
                />
                <br />
              </div>
            ))}
            <button type="button" onClick={addVideo} className="btn btn-primary">
              Add new video
            </button>
          </div>

          <br />
          <button onClick={handleSubmit} type="submit">Add course</button>
        </form>
      </div>
    </div>
  );
}

export default Courseform;












// Roadmap to become Fullstack Developer
// https://www.youtube.com/embed/K2od4f222Yo?si=u_HieCDUcVui-B4w

// HTML Elements
// https://www.youtube.com/embed/5HtDhiYT3sQ?si=Tz9Vc06uGvGMbndc


// HTML Anchor Tags
// https://www.youtube.com/embed/KKKNQq_VxfI?si=mz4_GXtqn6mapXip


// CSS box model indepth
// https://www.youtube.com/embed/BfOUwH0jNV0?si=tOl_d-s60sMYQKlh