import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

function Featured() {
  return (
    <div className='featured'>

        <div className="top">
            <h1 className='title'>Total revenue</h1>
            < MoreVertOutlinedIcon fontSize='small' />

        </div>

        <div className="bottom">

            <div className="featuredChart">
                <CircularProgressbar value={75} text = {"75%"} strokeWidth = {5}/>
            </div>

            <p className='title'>Total sales made today</p>
            <p className='amount'>$420</p>
            <p className='desc'>
                Previous transactions processing. Last payments may not be included.
            </p>

            <div className="summary">

               <div className="item">
                <div className="itemTitle">Target</div>
                 <div className="itemResult positive"> 
                 <ArrowDropDownOutlinedIcon fontSize='small'/>
                 <div className="resultAmount">$12.4k</div>
                </div>
               </div>
               
               <div className="item">
                <div className="itemTitle">Last Week</div>
                 <div className="itemResult negative"> 
                 <ArrowDropDownOutlinedIcon fontSize='small'/>
                 <div className="resultAmount">$12.4k</div>
                </div>
               </div>

               <div className="item">
                <div className="itemTitle">Last Month</div>
                 <div className="itemResult positive"> 
                 <ArrowDropDownOutlinedIcon fontSize='small'/>
                 <div className="resultAmount">$12.4k</div>
                </div>
               </div>

            </div>

        </div>

    </div>
  )
}

export default Featured