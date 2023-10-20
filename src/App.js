
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Cumponents/Header';
import Login from './Authentication/Login';
import Profile from './Cumponents/Profile';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';
import { routes } from './Routes';

function App() {
  return (
    
     <>
     <ToastContainer />
     <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/profile' element={<Layout children={<Profile/>}/>} />
      {routes.map((route)=>{
        return <Route key={route.id} path={route.navlink} element={<Layout children={route.component}/>} />
      })}
     </Routes>
     </BrowserRouter>
     
     
     
     </>
      
     
   
  );
}

export default App;
