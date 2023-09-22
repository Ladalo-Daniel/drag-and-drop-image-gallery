import Gallery from "./pages/gallerypage/Gallery";
import Login from "./pages/login/Login";
//import imageData from './imageData'
//import { useEffect, useRef, useState } from "react";

//import Sortable from "sortablejs";
import Layout from "./components/layout/Layout";
import {createRoutesFromElements, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from "./context/AppContext";



function App() {
 const {user} = useContext(AppContext)
  //Setting up route
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={ <Layout /> }>
       <Route index element={<Gallery />} />
       <Route path='/login' element={user? <Gallery /> : <Login /> } />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
