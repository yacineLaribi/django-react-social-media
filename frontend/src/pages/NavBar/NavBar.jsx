import "./navbar.css";
import { logo } from "../../assets/imgIndex";
import { NavLink } from "../../com/comIndex";
const NavBar = () => {
  let isLogged = false;
  return (
    <nav className="navbar">
      <img src={logo} alt="logo img" />
      <div className="nav">
        {isLogged ? (
          <NavLink />
        ) : (
          <div className="auth-menu">
            <button>log in</button>
            <button>sing up</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
