import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Verify from "./routes/Verify";
import Form from "./routes/Form";
import Notfound from "./routes/Notfound";

import Navigation from "./components/Navigation";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie-detail" element={<Detail />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
