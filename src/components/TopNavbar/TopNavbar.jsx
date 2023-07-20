import '../TopNavbar/top-nav.css'
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import AddToPhotosRoundedIcon from "@mui/icons-material/AddToPhotosRounded";
import Logo from '../../assets/logo.png'
import profile from "../../assets/profile.jpg";
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <div className="container-fluid main-top-nav-area py-2 ">
      <div className="row">
        <div className="col-md-3 log-area-main">
          <div className="log-area">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="col-md-6 search-area-top">
          {/* <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Search" />
          </div> */}
        </div>
        <div className="col-md-3 right-top-area">
          <div className="noti-area pe-2">
            <Badge badgeContent={0} color="primary">
              <NotificationsIcon className="noti-icon" color="light" />
            </Badge>
          </div>
          <div className="drop-area pe-2">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle drop-btn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <AddToPhotosRoundedIcon className="plus-icon" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link to="/add-hotels" class="dropdown-item active" href="#">
                    Hotel
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Recruiters
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Impactors
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Inventory
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="avtar-area">
            <div className="avtar">
              <Avatar alt="Remy Sharp" src={profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar