import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Events from "./components/events/Events";
import News from "./components/news/News";
import About from "./components/about/About";
import { useState } from "react";
import Dashboard from "./components/adminPanel/dashboard";
import EventDetails from "./components/eventDetails/EventDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
        <div>
          <Header isLoggedIn={isLoggedIn} isAdmin={isLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/eventDetails" element={<EventDetails />} />
            <Route
              path="/admin"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
            />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
