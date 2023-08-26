import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Picture.png" />
      </div>
      <div className="icons">
        <SearchIcon className='icon' />
        <AppsIcon className="icon" />
        <CropSquareIcon className="icon"/>
        <div className="notification">
          <NotificationsIcon className="icon"/>
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgDckzh3GtjWnNf_WLDOw2N6zDy_-llFMOyLtbqw&s" alt="" />
          <span>user</span>
        </div>
        <SettingsIcon  className="icon"/>
      </div>
    </div>
  )
}

export default Navbar