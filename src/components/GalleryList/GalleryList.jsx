import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){
    //template hook
    const [hook, setHook] = useState(null);

    return(
        <div>
            <h2>GalleryList</h2>
            {/* map through photos and create gallery item for each photo in array */}
            {props.photos.map(photo=>(<GalleryItem photo={photo}/>))}
            
        </div>
    );
}

export default GalleryList;