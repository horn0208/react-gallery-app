import {useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){
    //template hook
    const [hook, setHook] = useState(null);

    // TODO-- map through gallery array
    // TODO--Create a GalleryItem for each in array

    return(
        <div>
            <h2>GalleryList</h2>
            <p>Props: {JSON.stringify(props)}</p>
            <GalleryItem />
        </div>
    );
}

export default GalleryList;