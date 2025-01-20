import { Link } from "react-router-dom";
const SideMenu = ({isSidebarOpen}) => {

    return<>
        <div className={`sidebar ${isSidebarOpen ? '' : 'hidden'}`}>
        <br />
        <br />
        <a href="#" className="active">Dashboard</a>
        <a href="#">Analytics</a>
        <a href="#">Messages</a>
        <a href="#">Settings</a>
        <Link to="/ProfileData">ProfileData</Link>
        <Link to="/UserBlogs"> User Blog </Link>

      </div>
    </>
}

export default SideMenu;
