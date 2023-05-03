import { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyAds from './components/MyAds/MyAds';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [sideBar, setSideBar] = useState('d-lg-flex');

  const setBar = () => {
    setSideBar(sideBar === 'd-lg-flex' ? 'd-lg-none' : 'd-lg-flex');
  };

  return (
    <HashRouter>
      <div className="App">
        <Header setBar={setBar} />
        <div className="container-fluid full-height">
          <div className="row d-flex flex-grow-1 flex-column flex-sm-row h-100">
            <div className="col-lg-8 col-sm-12 order-sm-last flex-grow-1">
              <div className="p-5" id="Screen">
                <Routes>
                  <Route path="" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/myAds" element={<MyAds />} />
                  <Route path="/favorites" element={<Favorites />} />
                </Routes>
              </div>
            </div>
            <div className="col-lg-2 col-sm-0 order-sm-last flex-sm-grow-1" />
            <div
              className="col-lg-2 col-sm-12 p-0 order-sm-first"
              id="sideWrapper"
            >
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
