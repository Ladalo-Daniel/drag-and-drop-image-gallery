import { useContext } from "react";
import Loader from "../../components/loader/Loader";
import "./gallerypage.css"
import { AppContext } from "../../context/AppContext";

export default function Gallery() {
  const {imageListRef, filteredImages, loading} = useContext(AppContext)
  return (
          <>
           {loading ? <Loader /> :
           <div className="image-gallery">
            ( <div className="gallery" ref={imageListRef}>
              {filteredImages.map((image, index) => (
                <div className="gallery-item" key={image.id}> 
                  <img src={image.url} alt="" className='img-gallery' />
                   <p>{image.tags.join(', ')}</p>
                   <span className='drag__me'>Drag me { image.tags.join(', ')}</span>
                   <span className='drag__me__tag'>{ index + 1}</span>
                </div>
              ))}
            </div>)
           </div>
            }
          </>
  );
}
