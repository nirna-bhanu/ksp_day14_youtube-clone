import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import './App.css';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/videos')
      .then((response) => setVideos(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>

<Route path='/search/:searchTerm' 
element={
  <>
    <div className='app_page'>
      <Sidebar/>
      <SearchPage/>
    </div>
  </>
} />

          <Route
            path='/'
            element={
              <>
                <div className='app_page'>
                  <Sidebar/>
                  <RecommendedVideos />
                </div>
              </>
            }
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
