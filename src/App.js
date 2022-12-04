import HomePage from './pages/homePage';
import './App.css';
import Navbar from './components/navbar';
import Clothing from './pages/clothing';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { UpdateClothes } from './pages/updateClothes';
import {AddClothes} from './pages/addClothes';
import {DeleteCloth} from './pages/deleteClothes';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <title>Kidzzy</title>
      <h1>Kid Zone</h1>
      <Navbar/>
      <Routes>
       <Route exact path="/" element={<HomePage/>}></Route>
       <Route path="homePage" element={<HomePage/>}></Route>
       <Route path="clothing" element={<Clothing/>}></Route>
       <Route path="UpdateClothes" element={<UpdateClothes/>}></Route>
       <Route path="AddClothes" element={<AddClothes/>}></Route>
       <Route path="DeleteCloth" element={<DeleteCloth/>}></Route>

       </Routes>
    </div>
  </BrowserRouter>
  );
}
export default App;
