import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body(props){
    //template hook
    const [photos, setPhotos] = useState([]);
    //TODO--Make GET call on page load
    useEffect(()=>{
        getPhotos();
    }, []); //empty array makes this run only once
    const getPhotos=()=>{
        setPhotos(
            [{
                futurePic: 'testing'
            }]);
    }

    //TODO--Send response to GalleryList as prop

    return(
        <div>
            <h2>Body</h2>
            <p>Props: {JSON.stringify(props)}</p>
            <GalleryList photoArray={photos}/>
        </div>
    );
}

export default Body;