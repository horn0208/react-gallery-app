import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

function GalleryList({photos, getPhotos}){
    //template hook
    const [hook, setHook] = useState(null);

    return(
        <div className='gallery-box'>
            {/* map through photos and create gallery item for each photo in array */}
            {photos.map(photo=>(
                <GalleryItem
                photo={photo} 
                getPhotos={getPhotos}/>
            ))}
            
        </div>
    );
}

export default GalleryList;