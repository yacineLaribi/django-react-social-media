import { Button } from "../comIndex";
import "./navlink.css";
const NavLink = () => {
  return (
    <ul className="nav-link">
      <li>messages</li>
      <li>setting</li>
      <li>notification</li>
      <Button text={"log out"}/>
    </ul>
  );
};

export default NavLink;
