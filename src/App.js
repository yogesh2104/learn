import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductListTab from './Component/ProductListTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Component/Error'
import AboutUs from './Component/AboutUs/AboutUs';
import CustomDesign from './Component/CustomDesign/CustomDesign';
import LabGrow from './Component/Lab Grow/LabGrow';

import DeliveryInfo from './Component/Terms/DeliveryInfo';
import ReturnPolicy from './Component/Terms/ReturnPolicy';
import Policy from './Component/Terms/Policy';
import Terms from './Component/Terms/Terms';

function App() {
  return (
  <>
  <Routes>
    <Route path='/'  element={<ProductListTab/>}/>
    <Route path='*'  element={<Error/>}/>
    <Route path='/about'  element={<AboutUs/>}/>
    <Route path='/labGrow'  element={<LabGrow/>}/>
    <Route path='/customDesign' element={<CustomDesign/>}/>


    
    <Route path='/terms' element={<Terms/>}/>
    <Route path='/deliveryInfo' element={<DeliveryInfo/>}/>
    <Route path='/returnPolicy' element={<ReturnPolicy/>}/>
    <Route path='/policy' element={<Policy/>}/>
  </Routes>
  </>
  );
}

export default App;
