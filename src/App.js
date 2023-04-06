import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Components/Feed";
import Header from "./Components/Header";

function App() {
  return (
    <div className="h-full">
     <BrowserRouter>
     <Header />
     <Routes>
      <Route exact path="/" element={<Feed />} />
      {/* <Route path="/video/:id" element={} />
      <Route path="/channel/:id" element={} />
      <Route path="/search/searchTerm" element={} /> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
