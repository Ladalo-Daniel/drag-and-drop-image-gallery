import React, { createContext, useEffect, useRef, useState } from 'react'
import imageData from '../imageData';
import Sortable from 'sortablejs';

export const AppContext = createContext()

export default function AppContextProvider({children}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const imageListRef = useRef(null);
    const [user, setUser] = useState(false)

    //Fetching Image Data
  useEffect(() => {
      setImages(imageData);
    setTimeout(()=>{
      setLoading(false);
    },2000)
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
        image.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
 
  return (
    <AppContext.Provider value={{searchQuery, setSearchQuery, images, setImages, loading, setLoading, imageListRef, user, setUser, filteredImages}}>
      {children}
    </AppContext.Provider>
  )
}
