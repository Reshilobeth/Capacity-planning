import './new.scss'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';

function New({inputs, title}) {


  const [file, setFile] = useState('')
  console.log(file);

  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
          <div className="top">
            <h1>{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={file ? URL.createObjectURL(file): "https://i.pinimg.com/originals/7d/58/48/7d58481d067e336a6338b7bebfc0fe10.jpg"}
                alt="" 
              />
            </div>
            <div className="right">
              <form>

                <div className="formInput">
                  <label htmlFor='file'>
                    Image: <DriveFolderUploadIcon className='icon'/>
                  </label>
                  <input type="file"  id='file' onChange={e =>setFile(e.target.files[0])} style={{display:'none'}}/>
                </div>

                {inputs.map((input) => (
                  <div className='formInput' key={input.id}>
                    <label htmlFor="">{input.label}</label>
                    <input  type={input.type} placeholder={input.place} />
                  </div>
                ))}
                 
                <div className="formInput">
                  <label>User Name</label>
                  <input type="text" placeholder='john_doe' />
                </div>
                

                <button>Send</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default New