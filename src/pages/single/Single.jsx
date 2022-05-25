import './single.scss'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Charts from '../../component/charts/Charts'
import List from '../../component/table/Table'


function Single() {
  return (
     <div className='single'>
      <Sidebar/>

      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>

            <div className="item">
              <img 
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880" 
                alt="" 
                className="itemImg" />

                <div className="details">
                  <h1 className="itemTitle">Smith Doe</h1>

                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">smithdoe@gmail.com</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2313 12 14</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Address</span>
                    <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>

                </div>

            </div>
          </div>

          <div className="right">
            <Charts title = "User Spending (Late 6 months)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single