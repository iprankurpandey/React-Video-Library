import React from "react";
import axios from "axios";

// watchlater function
export const watchLaterFn = async (videos, setwatchLater) => {
  console.log(videos);
  console.log(localStorage.getItem("token"));
  const response = await axios({
    method: "POST",
    url: `/api/user/watchlater`,
    headers: { authorization: localStorage.getItem("token") },
    data: { video: videos },
  });
  console.log(response);
  setwatchLater(response.data.watchlater);
};

// History Function
export const History = async (videos, setHistory) => {
  console.log(`this is history`, videos);
  console.log(localStorage.getItem("token"));
  const response = await axios({
    method: "POST",
    url: `/api/user/history`,
    headers: { authorization: localStorage.getItem("token") },
    data: { video: videos },
  });
  console.log(response);
  setHistory(response.data.history);
};
