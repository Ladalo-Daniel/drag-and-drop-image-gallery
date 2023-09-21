import Gallery from "./pages/gallerypage/Gallery";
import Login from "./pages/login/Login";
import imageData from './imageData'
import { useEffect, useRef, useState } from "react";

import Sortable from "sortablejs";
import Layout from "./components/layout/Layout";
import {createRoutesFromElements, Route, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';



function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const imageListRef = useRef(null);
  const [user, setUser] = useState(false)
 
  //Fetching Image Data
  useEffect(() => {
    setImages(imageData);
    setTimeout(() => {
      setLoading(false);
    }, 7000)
    // Initializing SortableJS after images are loaded
    if (imageListRef.current) {
      new Sortable(imageListRef.current, {
        animation: 150,
        onEnd: handleDragEnd,
      });
    }
  }, []);
  
  //Function to handle drop-and-drop functionality
  const handleDragEnd = (event) => {
    const { oldIndex, newIndex } = event;
    const updatedImages = [...images];
    const [reorderedImage] = updatedImages.splice(oldIndex, 1);
    updatedImages.splice(newIndex, 0, reorderedImage);
    setImages(updatedImages);
  };

  //Function to filter the images based on tags
  const filteredImages = imageData.filter((image) =>
    image.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  //Implementing Protected route so that only login user can have access to the Image gallery
  const ProtectedRoute = ({children}) => {
    if(!user){
      return <Navigate to="/login" />
    }
    return children
   }

  //Setting up route
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={ <Layout  searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredImages={filteredImages} setUser={setUser} /> }>
       <Route index element={<ProtectedRoute><Gallery imageData={imageData} loading={loading} filteredImages={filteredImages} imageListRef={imageListRef} /></ProtectedRoute>} />
       <Route path='/login' element={<Login setUser={setUser} />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;
