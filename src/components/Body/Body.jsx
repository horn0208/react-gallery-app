import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Form from '../Form/Form';
import axios from 'axios';

function Body(props){
    //template hook
    const [photos, setPhotos] = useState([]);
    //Make GET call on page load
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

    //Send response to GalleryList as prop

    return(
        <div>
            <GalleryList photos={photos} getPhotos={getPhotos}/>
            <Form />
        </div>
    );
}

export default Body;