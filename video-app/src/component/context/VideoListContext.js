import React, { createContext, useState } from "react";
export const VideoListingContext = createContext();

function VideoListContext({ children }) {
  const [videoList, setVideoList] = useState([]);

  return (
    <div>
      <VideoListingContext.Provider value={{ videoList, setVideoList }}>
        {children}
      </VideoListingContext.Provider>
    </div>
  );
}

export { VideoListContext };
