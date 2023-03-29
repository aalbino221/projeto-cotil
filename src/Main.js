import Sidebar from './components/Sidebar';
import Screen from './components/Screen';

export default function Main() {
  return (
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
  );
}
