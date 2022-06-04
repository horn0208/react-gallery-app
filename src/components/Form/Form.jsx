import {useState} from 'react';
import axios from 'axios';

function Form({getPhotos}){
    // hooks
    const [newUrl, setNewUrl] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    // store form inputs
    const addUrl=()=>{
        setNewUrl(event.target.value);
    };
    const addTitle=()=>{
        setNewTitle(event.target.value);
    };
    const addDescription=()=>{
        setNewDescription(event.target.value);
    };

    // once Submit is clicked, send gallery item data to database:
    const addPhoto=()=>{
        console.log('in addPhoto:', newUrl, newTitle, newDescription);
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                path: newUrl,
                title: newTitle,
                description: newDescription
            }
        }).then((response)=>{
            console.log(response);
            //display current photo gallery
            getPhotos();
            clearInputs();
        }).catch((err)=>{
            console.log(err);
            alert('error posting photo');
        })
    };

    // clear inputs--Why doesn't this work???
    const clearInputs =()=>{
        setNewUrl('');
        setNewTitle('');
        setNewDescription('');
    };

    return(
        <div>
            <h2>Add Gallery Item</h2>
            <input value={newUrl} onChange={addUrl} type="text" placeholder='Image URL' />
            <input value={newTitle} onChange={addTitle} type="text" placeholder='Title'/>
            <input value={newDescription} onChange={addDescription} type="text" placeholder='Description'/>
            <button onClick={addPhoto}>Submit</button>
        </div>
    );
}

export default Form;