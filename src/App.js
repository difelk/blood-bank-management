import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';
import Home from './components/home/Home';
import Events from './components/events/Events';
import News from './components/news/News';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
  <Router>
      <div>

      <Header />{/* top navigation*/}
      <Routes>
        {/*each url paths.*/}
      <Route path='/' element={<Home name={"dilshan"}/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/news' element={<News/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
