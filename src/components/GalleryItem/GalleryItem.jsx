import axios from 'axios';
import {useState} from 'react';

function GalleryItem(props){
    //click to toggle content (hook)
    const [show, setShow] = useState(true);
    const [like, setLike] = useState(0);
    //swap image with description on click using conditional rendering
    const toggleShow =()=>{
        setShow(!show);
    }

    const countLike =()=>{
        setLike(like+1);
        console.log(like);
        //TODO--like button click: use axios to 'PUT' the like count /gallery/like/:id
        axios.put('/gallery/like/:id').then((response)=>{
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
            alert('error saving like');
        })
    }

    //TODO--update gallery each time like button is clicked (GET)

    return(
        <div>
            <h2>GalleryItem</h2>
            <p>Props: {JSON.stringify(props)}</p>
            <div onClick={toggleShow}>
                {
                    show?
                    <img src={props.photo.path}/>
                    :
                    <p>{props.photo.description}</p>
                }
            </div>
            <button onClick={countLike}>Like</button>
        </div>
    );
}

export default GalleryItem;