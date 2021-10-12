import logo from './logo.svg';
import './App.css';
import './assets/layout/header.css'
import HeaderClassComponent from './Components/HeaderClassComponent';
import ProductFunctionComponents from './Components/ProductFunctionComponents';
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import DataBinding from './Components/DataBinding/DataBinding';
import StyleComponent from './Components/StyleComponent/StyleComponent';
import ClassComponent from './Components/HeaderClassComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import StateDemo1 from './StateDemo/StateDemo1';
import BaiTapChonXe from './assets/BaiTapChonXe/BaiTapChonXe';
import RenderWithArray from './RenderWithArray/RenderWithArray';
import HomePage from './Props/HomePage';
import BTXemChiTiet from './Props/BTXemChiTiet/BTXemChiTiet';
import CarShop from './Props/CarShop/CarShop';
import BTCart from './BTCart/BTCart';
//JSX
function App() {
  //App là component main
  return (

    //chỉ được duy nhất 1 thẻ 
    <div className="App">
        <BTCart/>
        {/* <CarShop/> */}
        {/* <BTXemChiTiet/> */}
        {/* <HomePage/> */}
        {/* <RenderWithArray/> */}
        {/* <BaiTapChonXe/> */}
        {/* <StateDemo/> */}
        {/* <StateDemo1/> */}
        {/* <ChangeFontSize/> */}
        {/* <HandleEvent/> */}
        {/* <ProductFunctionComponents/> */}
        {/* <HeaderClassComponent/> */}
        {/* <HomeComponent/> */}
        {/* <h1>Hello React</h1> */}
        {/* sử dụng component */}
        {/* <ClassComponent/> */}
        {/* <DataBinding/> */}
          {/* <StyleComponent/> */}
        {/* <p className="text">App Component</p> */}
    </div>
    
  );
}

export default App;
