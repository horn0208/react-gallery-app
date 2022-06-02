import {useState} from 'react';

function GalleryItem(props){
    //click to toggle content (hook)
    const [show, setShow] = useState(true);
    //swap image with description on click using conditional rendering
    const toggleShow =()=>{
        setShow(!show);
    }
    //TODO--like button click: use axios to 'PUT' the like count /gallery/like/:id
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
        </div>
    );
}

export default GalleryItem;