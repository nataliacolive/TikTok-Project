import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video"
import db from "./config/firebase"
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight;
  }


  const [video, setVideos] = useState([]);

  async function getVideos() {
    const VideosCollection = collection(db, "Videos");
    const VideosSnaptshot = await getDocs(VideosCollection);
    const VideosList = VideosSnaptshot.docs.map((doc) => doc.data());
    setVideos(VideosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: `${maxHeight}px` }}>
    <div className="app__videos" >
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
        
        {/* <Video
          likes={444}
          messages={555}
          shares={666}
          name="Pedro"
          description="Bird olhando para camera"
          music="Clap your hands"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        /> */}
      </div>
    </div>
  );
}

export default App;
