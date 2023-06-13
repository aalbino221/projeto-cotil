import { useState, useMemo } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import MyAds from './components/MyAds/MyAds';
import EditAd from './components/MyAds/EditAd';
import NewAd from './components/MyAds/NewAd';
import Favorites from './components/Favorites/Favorites';
import Account from './components/Account/Account';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import StateContext from './StateContext';

function App() {
  const [sideBar, setSideBar] = useState('d-lg-flex');
  const [logged, setLogged] = useState(false);

  const setBar = () => {
    setSideBar(sideBar === 'd-lg-flex' ? 'd-lg-none' : 'd-lg-flex');
  };

  return (
    <HashRouter>
      <StateContext.Provider
        value={useMemo(() => [logged, setLogged], [logged])}
      >
        <div className="App">
          <Header setBar={setBar} />
          <div className="container-fluid full-height">
            <div className="row d-flex flex-grow-1 flex-column flex-sm-row h-100">
              <div className="col-lg-8 col-sm-12 order-sm-last flex-grow-1">
                <div
                  className="p-5"
                  id="Screen"
                >
                  <Routes>
                    <Route
                      path=""
                      element={<Home />}
                    />
                    <Route
                      path="/login"
                      element={<Login />}
                    />
                    <Route
                      path="/login/register"
                      element={<Register />}
                    />
                    <Route
                      path="/account"
                      element={<Account />}
                    />
                    <Route
                      path="/myAds"
                      element={<MyAds />}
                    />
                    <Route
                      path="/myAds/edit"
                      element={<EditAd />}
                    />
                    <Route
                      path="/myAds/new"
                      element={<NewAd />}
                    />
                    <Route
                      path="/favorites"
                      element={<Favorites />}
                    />
                  </Routes>
                </div>
              </div>
              <div className="col-xxl-1 col-sm-0 col-0 order-sm-last flex-sm-grow-1" />
              <div
                className="col-lg-2 col-sm-12 p-0 order-sm-first"
                id="sideWrapper"
              >
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </StateContext.Provider>
    </HashRouter>
  );
}

export default App;
