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
    }
    const addTitle=()=>{
        setNewTitle(event.target.value);
    }
    const addDescription=()=>{
        setNewDescription(event.target.value);
    }

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
        }).catch((err)=>{
            console.log(err);
            alert('error posting photo');
        })
        //display current photo gallery

    };

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