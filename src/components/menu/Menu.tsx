import './menu.scss'
import { Link } from "react-router-dom";
import { menu } from '../../Data'
function Menu() {
  return (
    <div className='menu'>
      {menu.map(item => (

        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map(listItem => (
            <Link to={listItem.url} className='listItem' key={listItem.id}>
              <div className='icon'> {listItem.icon}</div>
              <span className='listItemTitle'>{listItem.title}</span>
            </Link>))}
        </div>
      ))}
    </div>
  )
}

export default Menu