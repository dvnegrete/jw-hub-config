import { useState } from 'react';
import './App.css'
import ListVideos from './components/ListVideos'
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <h1>Videos instructivos de JW HUB</h1>
      
      <div className="card">
        {
          isAuthenticated ?
            <ListVideos />
            : <Login fxLogin={setIsAuthenticated} />
        }
      </div>
    </>
  )
}

export default App