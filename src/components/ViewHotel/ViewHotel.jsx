import '../ViewHotel/view-hotel.css'
import uploadImg from "../../assets/orange-qr.png";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import OrCode from "../../assets/orange-qr.png";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import imageURL from "../../assets/roon-3.png";
import { ColorLens } from "@mui/icons-material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import HotelImg from "../../assets/hotels-3.jpg";
import { useNavigate } from 'react-router-dom';


const ViewHotel = () => {
    const navigate = useNavigate();

  return (
    <>
      {/* top-nav-tow-start */}
      <div className="top-nav-bar-tow">
        <div className="right-side-text-nbt">
          <p>Hotels Details</p>
        </div>
        <div className="right-side-icon-nbt">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle sort-by-btn "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* top-nav-toe-end */}
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-8 view-hotel-details">
            <div className="view-hotel-mid-area mb-3">
              <div className="back-edit-btn ">
                <div className="right-side-back-btn">
                  <KeyboardBackspaceIcon />
                </div>
                <div className="left-side-edit-btn">
                  <BorderColorOutlinedIcon />
                </div>
              </div>
              <div className="form-area-view mb-3 ">
                {/* <div className="form-heading mb-3">
                  <p>Hotels Details</p>
                </div> */}
                <div className="view-hotel-img-area mb-3">
                  <div className="right-side-big-img">
                    <img src={HotelImg} alt="" />
                  </div>
                  <div className="left-side-img-min mb-3">
                    <div className="mini-img">
                      <img src={HotelImg} alt="" />
                    </div>
                    <div className="mini-img">
                      <img src={HotelImg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="view-hotel-name-area mb-3">
                  <div className="right-side-view-hotel me-2">
                    <p>Hotel Name:</p>
                  </div>
                  <div className="right-side-name-hotel-view">
                    <p>Hilton Atlanta</p>
                  </div>
                </div>
                <div className="view-hotel-name-area mb-3">
                  <div className="right-side-view-hotel me-2">
                    <p>Address:</p>
                  </div>
                  <div className="right-side-view-hotel">
                    <p>255 Coutland St NE, Atlanta ,Ga 30303</p>
                  </div>
                </div>
                <div className="view-hotel-select-filed mb-3">
                  <div className="col-md-4">
                    <select
                      class="form-select file-selct"
                      aria-label="Default select example"
                    >
                      <option selected>Recruiter</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select
                      class="form-select file-selct"
                      aria-label="Default select example"
                    >
                      <option selected>Inspector</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select
                      class="form-select file-selct"
                      aria-label="Default select example"
                    >
                      <option selected>Collaborates</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="galary-area">
              <div className="galary-area-heading ">
                <p>Scan Here OR Code</p>
              </div>
              <div className="view-qr mt-3">
                <img src={uploadImg} alt="" />
              </div>
              <div className="date-area-qr-view mt-4">
                <div className="right-side-qr-icon me-2">
                  <CalendarMonthOutlinedIcon className="qr-icon" />
                </div>
                <div className="right-side-text-date-qr">
                  <p>2/7/23</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewHotel;