import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function Body(props){
    //template hook
    const [photos, setPhotos] = useState([]);
    //TODO--Make GET call on page load
    useEffect(()=>{
        getPhotos();
    }, []); //empty array makes this run only once

    const getPhotos=()=>{
        axios.get('/gallery').then((response)=>{
            setPhotos(response.data);
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
            alert('error getting photos');
        })
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