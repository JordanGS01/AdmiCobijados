import "./sidebar.css";
import {
  PermIdentity,
  Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Inventario y Usuarios</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Usuarios
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Productos
              </li>
            </Link>            
          </ul>
        </div>
      </div>
    </div>
  );
}
