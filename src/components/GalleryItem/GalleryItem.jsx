import {useState} from 'react';

function GalleryItem(props){
    //template hook
    const [hook, setHook] = useState(null);

    //TODO--swap image with description on click using conditional rendering
    //TODO--like button click: use axios to 'PUT' the like count /gallery/like/:id
    //TODO--update gallery each time like button is clicked (GET)

    return(
        <div>
            <h2>GalleryItem</h2>
            <p>Props: {JSON.stringify(props)}</p>
        </div>
    );
}

export default GalleryItem;