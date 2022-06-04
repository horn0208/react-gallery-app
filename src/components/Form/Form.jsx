import {useState} from 'react';

function Form({getPhotos}){
    // hooks
    const [newUrl, setNewUrl] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    // store form inputs
    const addUrl=()=>{
        setNewUrl(event.target.value);
    }
    const addTitle=()=>{
        setNewTitle(event.target.value);
    }
    const addDescription=()=>{
        setNewDescription(event.target.value);
    }

    // collect submitted info in an object once Submit is clicked
    const addPhoto=()=>{
        console.log('in addPhoto:', newUrl, newTitle, newDescription);
        let newGalleryItem = {
            path: newUrl,
            title: newTitle,
            description: newDescription
        }
    }

    return(
        <div>
            <h2>Add Gallery Item</h2>
            <input onChange={addUrl} type="text" placeholder='Image URL' />
            <input onChange={addTitle} type="text" placeholder='Title'/>
            <input onChange={addDescription} type="text" placeholder='Description'/>
            <button onClick={addPhoto}>Submit</button>
        </div>
    );
}

export default Form;