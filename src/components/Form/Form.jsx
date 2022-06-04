import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import TextField from '@mui/material/TextField';


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

    // clear input fields and values
    const clearInputs =()=>{
        setNewUrl('');
        setNewTitle('');
        setNewDescription('');
    };

    return(
        <div>
            <h2>Add Gallery Item</h2>
            <TextField 
                variant='outlined'
                size='small'
                color='primary' 
                value={newUrl} 
                onChange={addUrl} 
                type="text" 
                label='Image URL' />
            <TextField
                variant='outlined'
                size='small'
                color='primary' 
                value={newTitle} 
                onChange={addTitle} 
                type="text" 
                label='Title'/>
            <TextField 
                variant='outlined'
                size='small'
                color='primary' 
                value={newDescription} 
                onChange={addDescription} 
                type="text" 
                label='Description'/>
            <Button 
                variant="contained"
                color='primary'
                endIcon={<ArrowCircleUpIcon />}
                onClick={addPhoto}>
                Submit
            </Button>
        </div>
    );
}

export default Form;