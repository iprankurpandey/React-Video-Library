import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { Videocard } from "../component/Videocard";
import Videodata from "../component/Videodata";
import "../component/Videocard.css";
function VideoListing() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Videodata />
      <Footer />
    </div>
  );
}

export default VideoListing;
