import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidevideolist.css";
function Sidevideolist() {
  const Portfolio = () => {
    const history = useNavigate();
    console.log(history);
  };

  useEffect(() => {
    Portfolio();
  }, []);

  return (
    <div>
      <div className="side-video-list">THis is side video</div>
    </div>
  );
}

export default Sidevideolist;
