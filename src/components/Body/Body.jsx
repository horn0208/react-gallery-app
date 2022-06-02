import {useState} from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body(props){
    //template hook
    const [hook, setHook] = useState(null);
    //TODO--Make GET call on page load

    //TODO--Send response to GalleryList as prop

    return(
        <div>
            <h2>Body</h2>
            <p>Props: {JSON.stringify(props)}</p>
            <GalleryList />
        </div>
    );
}

export default Body;