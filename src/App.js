import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Screen from './components/Screen';

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [sideBar, setSideBar] = useState('d-lg-flex');

  useEffect(() => {
    switch (currentTab) {
      case 'my-ads':
        document.title = 'Meus Anúncios';
        break;
      case 'favorite-ads':
        document.title = 'Favoritos';
        break;
      case 'login':
        document.title = 'Login/Cadastro';
        break;
      default:
        document.title = 'Home';
    }
  }, [currentTab]);

  const setBar = () => {
    setSideBar(sideBar === 'd-lg-flex' ? 'd-lg-none' : 'd-lg-flex');
  };

  return (
    <div className="App">
      <Header setBar={setBar} />
      <div className="container-fluid full-height">
        <div className="row d-flex flex-grow-1 flex-column flex-sm-row h-100">
          <div className="col-lg-8 col-sm-12 order-sm-last flex-grow-1">
            <Screen currentTab={currentTab} />
          </div>
          <div className="col-lg-2 col-sm-0 order-sm-last flex-sm-grow-1" />

          <div
            className="col-lg-2 col-sm-12 p-0 order-sm-first"
            id="sideWrapper"
          >
            <Sidebar setCurrentTab={setCurrentTab} sideBar={sideBar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
