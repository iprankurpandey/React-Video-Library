import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import VideoListing from "./page/VideoListing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/VideoListing" element={<VideoListing />} />
      </Routes>
    </div>
  );
}

export default App;
