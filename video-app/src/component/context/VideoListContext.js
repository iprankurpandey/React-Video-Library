import React, { createContext, useState } from "react";
export const VideoListingContext = createContext();

function VideoListContext({ children }) {
  const [videoList, setVideoList] = useState([]);
  const [Likes, setLikes] = useState([]);
  const [watchLater, setwatchLater] = useState([]);
  const [likeVideo, setLikedVideo] = useState([]);
  const [deleteWatchLater, setdeleteWatchLater] = useState([]);
  const [history, setHistory] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [newplaylist, setnewplaylist] = useState([]);
  // token
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM`;
  localStorage.setItem("token", token);

  return (
    <div>
      <VideoListingContext.Provider
        value={{
          videoList,
          setVideoList,
          Likes,
          setLikes,
          watchLater,
          setwatchLater,
          likeVideo,
          setLikedVideo,
          deleteWatchLater,
          setdeleteWatchLater,
          history,
          setHistory,
          playlists,
          setPlaylists,
          newplaylist,
          setnewplaylist,
        }}
      >
        {children}
      </VideoListingContext.Provider>
    </div>
  );
}

export { VideoListContext };
