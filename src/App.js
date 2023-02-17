import Body from './components/Body';
import {Routes, Route} from 'react-router-dom';
import MainLayout from './pages/layout/MainLayout';
import './css/homepage.css';
import Dota2 from './pages/Dota2';
import Csgo from './pages/Csgo';
import Freestyle2 from './pages/Freestyle2';

function App() {
  return(
    <Routes>

      <Route element={<MainLayout />}>
        <Route path='/' element={<Body />} />
        <Route path='/dota2' element={<Dota2 />} />
        <Route path='/csgo' element={<Csgo />} />
        <Route path='/freestyle2' element={<Freestyle2 />} />
      </Route>

    </Routes>
  )
}

export default App;