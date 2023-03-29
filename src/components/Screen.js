/* eslint-disable react/prop-types */
import Login from './Login';
import Home from './Home';
import MyAds from './MyAds';
import Favorites from './Favorites';

export default function Screen({ currentTab }) {
  return (
    <div className="p-5" id="Screen">
      {currentTab === 'home' ? <Home /> : ''}
      {currentTab === 'my-ads' ? <MyAds /> : ''}
      {currentTab === 'favorite-ads' ? <Favorites /> : ''}
      {currentTab === 'login' ? <Login /> : ''}
    </div>
  );
}
