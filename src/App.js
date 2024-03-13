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
import { useContext, useState } from "react";
import Dashboard from "./components/adminPanel/dashboard";
import EventDetails from "./components/eventDetails/EventDetails";
import LoginForm from "./components/login/Login";
import { GlobalContext } from "./contexts/ContextsProvider";

function App() {
  const { loggedInUser, login, logout } = useContext(GlobalContext);
  const [isLoggedIn, setIsLoggedIn] = useState(loggedInUser);

  return (
    <div className="App">
      <Router>
        <div>
          <Header
            isLoggedIn={loggedInUser}
            isAdmin={isLoggedIn || loggedInUser?.role}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/eventDetails" element={<EventDetails />} />
            <Route path="/login" component={<LoginForm />} />
            {loggedInUser?.role ? (
              <Route path="/admin" element={<Dashboard />} />
            ) : (
              <Route path="/admin" element={<Navigate to="/" />} />
            )}
            <Route />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
