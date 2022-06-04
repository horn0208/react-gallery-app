import axios from 'axios';
import {useState, useEffect} from 'react';

function GalleryItem({photo, getPhotos}){
    //click to toggle content (hook)
    const [show, setShow] = useState(true);
    // click to increment like count
    const [like, setLike] = useState(0);

    // useEffect to console log after like is updated:
    useEffect(()=>{
        console.log(like);
    },[like]);

    //swap image with description on click using conditional rendering
    const toggleShow =()=>{
        setShow(!show);
    }

    const countLike =()=>{
        setLike(like+1);
        console.log('props id in countLike:', photo.id);
        // axios 'PUT' to update the like count /gallery/like/:id
        axios.put(`/gallery/like?id=${photo.id}`).then((response)=>{
            console.log(response.data);
            // GET updated photos from database and display
            getPhotos();
        }).catch((err)=>{
            console.log(err);
            alert('error saving like');
        })
    }

    const deletePic =()=>{
        console.log('in deletePic, id:', photo.id);
        // axios 'DELETE' to remove photo from database
        axios.delete(`/gallery/delete?id=${photo.id}`).then((response)=>{
            console.log(response.data);
            // GET photos from database and display
            getPhotos();
        }).catch((err)=>{
            console.log(err);
            alert('error deleting photo');
        })
    }

    return(
        <div>
            <h2>{photo.title}</h2>
            <div onClick={toggleShow}>
                {
                    show?
                    <img src={photo.path}/>
                    :
                    <p>{photo.description}</p>
                }
            </div>
            <div>
                <button onClick={countLike}>Like</button>
                <p>Likes: {photo.likes}</p>
                <button onClick={deletePic}>Delete</button>
            </div>
        </div>
    );
}

export default GalleryItem;