import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import VideoDetails from "./Components/VideoDetails";
import ChannelDetails from "./Components/ChannelDetails";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div className="h-full">
     <BrowserRouter>
     <Header searchTerm  />
     <Routes>
      <Route exact path="/" element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetails />} />
      <Route path="/channel/:id" element={<ChannelDetails />} />
      <Route path="/search/:searchTerm" element={<SearchPage />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
