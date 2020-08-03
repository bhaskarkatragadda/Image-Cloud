import React, {useState} from 'react';
import ProgessBar from './ProgressBar';


const UploadForm = () => {

    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const types = ['image/png','image/jpeg'];

    const changeHandler = (e) => {
    let selected = e.target.files[0];
   

    if(selected && types.includes(selected.type)){
        setFile(selected);
        setError('');
    }else{
        setFile(null);
        setError('Please select a image file (png or jpeg)');
    }
}

    return (
        <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            </label>
            <div className="output">
                    {error && <div className="error">{error} </div>  }
                    {file && <div>{file.name}</div>}
                    {file && <ProgessBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;