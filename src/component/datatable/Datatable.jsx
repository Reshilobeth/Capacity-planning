import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';

import {Link} from "react-router-dom"


function Datatable() {

    const actionColumn = [
        {field:'action', headName:'Action', width:200, renderCell:() =>{
            return (
                <div className='cellAction'>

                  <Link to='/users/test' style={{textDecoration:'none'}}>
                    <div className='viewButton'>View</div>
                  </Link>
                    
                    <div className='deleteButton'>Delete</div>
                </div>
            )
        }
    }
] 

  return (
    <div className='datatable'>

      <div className='dataTableTitle'>
        Add New user
        <Link to = '/users/new' className = 'link'>
          Add New
        </Link>
      </div>
      
        <DataGrid
        className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable