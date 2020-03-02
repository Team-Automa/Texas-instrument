import React, { useEffect } from "react";
import { Context } from "../../Context/context";
import { Button } from "semantic-ui-react";

const VideoController = () => {
  const [location, setLocation] = React.useState([]);
  const video = document.querySelector("video");
  const VideoReff = React.createRef();
  
  useEffect(() => {
    Locate();
  }, [location]);
  
  const getMediaSrc = () => {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.mozgetUserMedia ||
      navigator.webkitgetUserMedia ||
      navigator.ogetUserMedia;
    return navigator.getUserMedia;
  };

  function StreamAppController(option) {
    
    const VideoView = (stream) =>{
          video.srcObject = stream;
          
          if(navigator.getUserMedia){
            option.play();
          }
          else{
            option.pause()
          }

    }

    navigator.getUserMedia = getMediaSrc();
    navigator.getUserMedia({ video: true, audio: true }, VideoView , VideoError);
    
    
    
    // function VideoView(stream) {
    //   video.srcObject = stream;
    //   if (navigator.getUserMedia) {
    //     option.play();
    //   } else {
    //     option.pause();
    //   }
    // }
    function VideoError(err) {
      console.log(err);
    }
  }
  const StreamApp = e => {
    StreamAppController(video);
    // the
  };
  function RecordOption(e) {
    navigator.getUserMedia = getMediaSrc();

    navigator.getUserMedia({ audio: true }, audioInput, videoErr);
    const audio = document.querySelector("audio");

    function audioInput(stream) {
      audio.srcObject = stream;
      console.log(stream);
    }
    function videoErr(err) {
      console.log(err);
    }
  }

  // geoLocation tracker
  
  function Locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        setLocation(data);
        console.log(data);
      });
    }
  }
  
  // Render ui 

  return (
    <div style={{ margin: "10px" }}>
      <h3>Video streaming and Real time Location and audio streaming</h3>
      <video height="400" width="400" loop />
      <audio controls className="" loop />
      <Button negative onClick={StreamApp} ref={VideoReff}>
        Stream Video
      </Button>
      <Button positive onClick={RecordOption}>
        Record Audio
      </Button>
    </div>
  );
};

export default VideoController;
