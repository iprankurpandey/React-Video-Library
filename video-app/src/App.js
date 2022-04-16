import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleVideoPage from "./component/SingleVideoPage";
import HistoryPage from "./page/HistoryPage";
import Homepage from "./page/Homepage";
import LikesPage from "./page/LikesPage";
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
      </Routes>
    </div>
  );
}

export default App;
