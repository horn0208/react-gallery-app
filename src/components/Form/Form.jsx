import {useState} from 'react';

function Form(props){
    //template hook
    const [hook, setHook] = useState(null);

    return(
        <div>
            <h2>Form</h2>
            <p>Props: {JSON.stringify(props)}</p>
        </div>
    );
}

export default Form;