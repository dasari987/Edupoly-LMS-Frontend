import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCourseupdatingMutation } from '../../services/courses';




function EditCourse() {
  var { state } = useLocation();
  console.log(state);
  var [updateCourseFn] = useCourseupdatingMutation()
  var navigate = useNavigate();

  const [coursename, setCoursename] = useState(state?.coursename || '');
  const [price, setPrice] = useState(state?.price || '');
  const [duration, setDuration] = useState(state?.duration || '');
  const [trainer, setTrainer] = useState(state?.trainer || '');
  const [image, setImage] = useState(state?.image || '');
  const [technologies, setTechnologies] = useState(state?.technologies || '');
  const [videos, setVideos] = useState(state?.videos || [{ videotitle: '', videolink: '' }]);

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
    const updatedCourse = {
      id:state?.["_id"],
      coursename,
      price,
      duration,
      trainer,
      image,
      technologies,
      videos,
    };
    console.log('Updated Course Data:', updatedCourse);

    var data = await updateCourseFn(updatedCourse)
    if(data){
        console.log("data",data)
        // navigate("/home")
    }
    else
    {
        console.log("errorrrdata",data)
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center m-3">
      <div className="text-center border border-dark rounded p-4">
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="id"
            placeholder="Course id"
            className="m-2"
            value={state?.['_id']}
          />
          <br />
          <input
            type="text"
            name="coursename"
            placeholder="Course Name"
            className="m-2"
            value={coursename}
            onChange={(e) => setCoursename(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="m-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            className="m-2"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="trainer"
            placeholder="Trainer"
            className="m-2"
            value={trainer}
            onChange={(e) => setTrainer(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="m-2"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="technologies"
            placeholder="Technologies"
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
                  placeholder="Video Title"
                  value={video.videotitle}
                  onChange={(e) => handleVideoChange(index, e)}
                  className="m-2"
                />
                <input
                  type="text"
                  name="videolink"
                  placeholder="Video Link"
                  value={video.videolink}
                  onChange={(e) => handleVideoChange(index, e)}
                  className="m-2"
                />
                <br />
              </div>
            ))}
            <button type="button" onClick={addVideo} className="btn btn-primary">
              Add New Video
            </button>
          </div>

          <br />
          <button  className="btn btn-success">Update Course</button>
        </form>
      </div>
    </div>
  );
}

export default EditCourse;
