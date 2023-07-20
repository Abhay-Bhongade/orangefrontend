import '../SideNavbar/side-nav.css'
import GTranslateIcon from "@mui/icons-material/GTranslate";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { NavLink } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="col-md-2 hh boday-cantainer">
      <div className="color-overly"></div>
      <div className="main-leyar-side-bar">
        <NavLink
          to="/home"
          activeClassName="active"
          className="side-text-area my-1 btn10 btn"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/all-hotels"
          activeClassName="active"
          className="side-text-area my-1 btn10 btn"
        >
          Hotels
        </NavLink>
        <NavLink
          to="/all-recuiters"
          activeClassName="active"
          className="side-text-area my-1 btn10 n=btn"
        >
          Recruiters
        </NavLink>
        <NavLink
          to="/all-impactorrs"
          activeClassName="active"
          className="side-text-area my-1 btn10 btn"
        >
          Inspector
        </NavLink>
        <div className="side-text-area my-1 btn10 btn">
          Inventory
        </div>
        <div className="side-text-area my-1 btn10 btn">
          Collaborates
        </div>
        <div className="side-text-area my-1 btn10 btn">
          Accounting
        </div>
        <div
          className="border-top mb-3 main-b"
          style={{ marginTop: "12.5rem" }}
        ></div>
        <div className="traslete-main my-2">
          <div className="tra-text me-2">
            <p>Translate</p>
          </div>
          <div className="tra-icon">
            <GTranslateIcon className="tra-i" />
          </div>
        </div>
        <div className="exit-main my-2">
          <div className="text-ex me-2">
            <p>Exit</p>
          </div>
          <div className="ex-icon">
            <LogoutOutlinedIcon className="ex-i" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar