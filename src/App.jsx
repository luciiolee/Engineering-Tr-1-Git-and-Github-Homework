import sceneryImg from './assets/scenery.jpeg';

import './App.css';

function App() {
  return (
    <div className="container">
    <h1 className="title">Yosemite National Park</h1>
    <img className="scenery-img" src={sceneryImg} alt="A beautiful scenery" />
      <p className="description">
        A picture of Yosemite National Parks Half Dome, halfway through the 4 Mile Trail.
      </p>
    </div>
  )
}

export default App