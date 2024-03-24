import "./navbar.css";
import { logo } from "../../assets/imgIndex";
import { Button, NavLink } from "../../com/comIndex";
const NavBar = () => {
  let isLogged = true;
  return (
    <nav className="navbar">
      <img src={logo} alt="logo img" />
      <div className="nav">
        {isLogged ? (
          <NavLink />
        ) : (
          <div className="auth-menu">
            <Button text={"log in"} />
            <Button text={"sing up"} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
