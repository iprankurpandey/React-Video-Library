import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleVideoPage from "./component/SingleVideoPage";
import Homepage from "./page/Homepage";
import LikedVideo from "./page/LikedVideo";
import VideoListing from "./page/VideoListing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/VideoListing" exact element={<VideoListing />} />
        <Route path="/VideoListing/:_id" exact element={<SingleVideoPage />} />
        <Route path="/LikedVideo" exact element={<LikedVideo />} />
      </Routes>
    </div>
  );
}

export default App;
