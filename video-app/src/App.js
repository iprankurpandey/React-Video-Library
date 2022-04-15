import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleVideoPage from "./component/SingleVideoPage";
import Homepage from "./page/Homepage";
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
      </Routes>
    </div>
  );
}

export default App;
