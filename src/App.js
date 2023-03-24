import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Screen from './components/Screen';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid full-height">
        <div className="row d-flex flex-grow-1 flex-column flex-sm-row h-100 overflow-auto">
          <div className="col-lg-10 col-sm-12 order-sm-last flex-grow-1">
            <Screen />
          </div>
          <div className="col-lg-2 col-sm-12 p-0 order-sm-first">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
