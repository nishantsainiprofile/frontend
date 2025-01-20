// import React, { useState } from 'react';
// import './App.css';
// import "./index.css";
// import RouterPath from './RouterPath';
// import { Link } from 'react-router-dom';


// const Dashboard = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   // const Navigate  = useNavigate()
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };
       

//   return (<div>
//     <div className="app-container">
//     <div className="dashboard">
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
//       </button>

//       <div className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
//         <br />
//         <br />
//         <a href="#" className="active">Dashboard</a>
//         <a href="#">Analytics</a>
//         <a href="#">Users</a>
//         <a href="#">Messages</a>
//         <a href="#">Settings</a>
//         <a href ="#">LogOut</a>
//         {/* <Link to="/UserBlogs"> User Blog </Link> */}
//       </div>

//       <div className={`Linkto ${isSidebarOpen ? 'shifted-right' : 'shifted-left'}`}>
//         <RouterPath /> 
//       </div>

//       </div>
//           <footer className="footer stretch">
//             This is footer
//           </footer>
//     </div>
    
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState } from 'react';
import './App.css';
import "./index.css";
import RouterPath from './RouterPath';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  // const Navigate  = useNavigate()
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
       

  return (
  <div>
    <div className="app-container">
      <div className="dashboard">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>

            <div className={`Linkto ${isSidebarOpen ? 'shifted-right' : 'shifted-left'}`}>
              <RouterPath isSidebarOpen={isSidebarOpen} /> 
            </div>

        </div>
    </div>
    
  </div>
  );
};

export default Dashboard;






