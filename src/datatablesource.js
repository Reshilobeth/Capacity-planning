export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },{
        field:'user', headerName:'User',width:230, renderCell:(paramas) =>{
            return (
                <div className="cellWidthImg">
                    <img className="cellImg" src={paramas.row.img} alt ='avatar'/>
                    {paramas.row.userName}
                </div>
            )
        }
    },

    {
        field:'email',  headerName:'Email', width: 230
    },
    {
        field:'age',  headerName:'Age', width: 100
    },
    {
        field:'status',  headerName:'Status', width: 200, renderCell:(params) =>{
            return(
                <div className={`cellWidthStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]

export const userRows = [
    {
        id:1,
        userName:"Snow",
        img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387',
        status:'active',
        email:'issnow@gmsil.com',
        age:35,

    },
    {
        id:2,
        userName:"Jamie Lannister",
        img:'https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074',
        status:'passive',
        email:'jamieLannister@gmail.com',
        age:35,

    },
    {
        id:3,
        userName:"Lannister",
        img:'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880',
        status:'pending',
        email:'lannister@gmail.com',
        age:35,

    },
    {
        id:4,
        userName:"Stark",
        img:'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500',
        status:'active',
        email:'stark@gmail.com',
        age:16,

    },
    {
        id:5,
        userName:"Targaryen",
        img:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500',
        status:'passive',
        email:'targaryen@gmail.com',
        age:22,

    },
    
]