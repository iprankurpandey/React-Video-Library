import { BrowserRouter, Route, Routes } from "react-router-dom";

import HistoryPage from "./page/HistoryPage";
import Homepage from "./page/Homepage";
import LikesPage from "./page/LikesPage";
import PlaylistsPage from "./page/PlaylistsPage";
import PlaylistviewPage from "./page/PlaylistviewPage";
import SingleVideoPage from "./page/SingleVideoPage";
import VideoListing from "./page/VideoListing";
import { WatchLaterVideos } from "./page/WatchLaterVideos";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/VideoListing" exact element={<VideoListing />} />
        <Route path="/VideoListing/:_id" exact element={<SingleVideoPage />} />
        <Route path="/WatchLaterVideos" exact element={<WatchLaterVideos />} />
        <Route path="/LikesPage" exact element={<LikesPage />} />
        <Route path="/HistoryPage" exact element={<HistoryPage />} />
        <Route path="/Playlists" exact element={<PlaylistsPage />} />
        <Route path="/Playlists/:_id" exact element={<PlaylistviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
