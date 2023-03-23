import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Screen from './components/Screen';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid full-height">
        <div className="row d-flex flex-grow-1 h-100 overflow-auto">
          <div className="col-2 p-0">
            <Sidebar />
          </div>
          <div className="col-10">
            <Screen />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
