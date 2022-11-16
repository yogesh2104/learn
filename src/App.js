import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductListTab from './Component/ProductListTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Component/Error'
import AboutUs from './Component/AboutUs/AboutUs';
import CustomDesign from './Component/CustomDesign/CustomDesign';

function App() {
  return (
  <>
  <Routes>
    <Route path='/'  element={<ProductListTab/>}/>
    <Route path='*'  element={<Error/>}/>
    <Route path='/about'  element={<AboutUs/>}/>
    <Route path='/customDesign' element={<CustomDesign/>}/>
  </Routes>
  </>
  );
}

export default App;
