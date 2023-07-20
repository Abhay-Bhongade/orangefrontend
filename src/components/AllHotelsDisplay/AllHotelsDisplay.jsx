import "../AllHotelsDisplay/all-hotels-display.css";

import HotelImg from "../../assets/hotels-3.jpg";
import HotelImg2 from "../../assets/hotels-4.jpg";
import HotelImg3 from "../../assets/hotels-5.webp";
import HotelImg4 from "../../assets/hotels-6.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const AllHotelsDisplay = () => {
  return (
    <>
      {/* top-nav-tow-start */}
      <div className="top-nav-bar-tow">
        <div className="right-side-text-nbt">
          <p>All Hotels</p>
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
      <div className="container">
        <div className="row my-2 px-2">
          <div className="col-md-3 main-card-container mt-1 mb-3">
            <div className="crad-area-main bg-white">
              <div className="img-area">
                <img src={HotelImg} alt="" />
              </div>
              <div className="text-card-area mt-2">
                <div className="heding-card">
                  <span className="me-2">Hotel</span>
                  <p>Hilton Atlanta</p>
                </div>
                <div className="address-area-text-card mt-2">
                  <p>255 Coutland St NE, Atlanta ,Ga 30303</p>
                </div>
              </div>
              <div className="icons-card-area">
                <ul className="list-group d-flex flex-row justify-content-center ">
                  <li className="list-group-item border-0">
                    <button className="icon-bottom btn land">
                      <InfoOutlinedIcon className="land-buttom-icons" />
                    </button>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <BorderColorOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <DeleteOutlineOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 main-card-container mt-1 mb-3">
            <div className="crad-area-main bg-white">
              <div className="img-area">
                <img src={HotelImg2} alt="" />
              </div>
              <div className="text-card-area mt-2">
                <div className="heding-card">
                  <span className="me-2">Hotel</span>
                  <p>Mandarin Oriental</p>
                </div>
                <div className="address-area-text-card mt-2">
                  <p>255 Coutland St NE, Atlanta ,Ga 30303</p>
                </div>
              </div>
              <div className="icons-card-area">
                <ul className="list-group d-flex flex-row justify-content-center ">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <InfoOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <BorderColorOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <DeleteOutlineOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 main-card-container mt-1 mb-3">
            <div className="crad-area-main bg-white">
              <div className="img-area">
                <img src={HotelImg3} alt="" />
              </div>
              <div className="text-card-area mt-2">
                <div className="heding-card">
                  <span className="me-2">Hotel</span>
                  <p>Hotel Indigo</p>
                </div>
                <div className="address-area-text-card mt-2">
                  <p>255 Coutland St NE, Atlanta ,Ga 30303</p>
                </div>
              </div>
              <div className="icons-card-area">
                <ul className="list-group d-flex flex-row justify-content-center ">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <InfoOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <BorderColorOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <DeleteOutlineOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 main-card-container mt-1 mb-3">
            <div className="crad-area-main bg-white">
              <div className="img-area">
                <img src={HotelImg4} alt="" />
              </div>
              <div className="text-card-area mt-2">
                <div className="heding-card">
                  <span className="me-2">Hotel</span>
                  <p>The Stanley</p>
                </div>
                <div className="address-area-text-card mt-2">
                  <p>255 Coutland St NE, Atlanta ,Ga 30303</p>
                </div>
              </div>
              <div className="icons-card-area">
                <ul className="list-group d-flex flex-row justify-content-center ">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <InfoOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <BorderColorOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <DeleteOutlineOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 main-card-container mt-3">
            <div className="crad-area-main bg-white">
              <div className="img-area">
                <img src={HotelImg} alt="" />
              </div>
              <div className="text-card-area mt-2">
                <div className="heding-card">
                  <span className="me-2">Hotel</span>
                  <p>Hilton Atlanta</p>
                </div>
                <div className="address-area-text-card mt-2">
                  <p>255 Coutland St NE, Atlanta ,Ga 30303</p>
                </div>
              </div>
              <div className="icons-card-area">
                <ul className="list-group d-flex flex-row justify-content-center ">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <InfoOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <BorderColorOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <DeleteOutlineOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 main-card-container mt-3">
            <div className="crad-area-main bg-white">
              <div className="img-area">
                <img src={HotelImg2} alt="" />
              </div>
              <div className="text-card-area mt-2">
                <div className="heding-card">
                  <span className="me-2">Hotel</span>
                  <p>Mandarin Oriental</p>
                </div>
                <div className="address-area-text-card mt-2">
                  <p>255 Coutland St NE, Atlanta ,Ga 30303</p>
                </div>
              </div>
              <div className="icons-card-area">
                <ul className="list-group d-flex flex-row justify-content-center ">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <InfoOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <BorderColorOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <DeleteOutlineOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 main-card-container mt-3">
            <div className="crad-area-main bg-white">
              <div className="img-area">
                <img src={HotelImg3} alt="" />
              </div>
              <div className="text-card-area mt-2">
                <div className="heding-card">
                  <span className="me-2">Hotel</span>
                  <p>Hotel Indigo</p>
                </div>
                <div className="address-area-text-card mt-2">
                  <p>255 Coutland St NE, Atlanta ,Ga 30303</p>
                </div>
              </div>
              <div className="icons-card-area">
                <ul className="list-group d-flex flex-row justify-content-center ">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <InfoOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <BorderColorOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <DeleteOutlineOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 main-card-container mt-3">
            <div className="crad-area-main bg-white">
              <div className="img-area">
                <img src={HotelImg4} alt="" />
              </div>
              <div className="text-card-area mt-2">
                <div className="heding-card">
                  <span className="me-2">Hotel</span>
                  <p>The Stanley</p>
                </div>
                <div className="address-area-text-card mt-2">
                  <p>255 Coutland St NE, Atlanta ,Ga 30303</p>
                </div>
              </div>
              <div className="icons-card-area">
                <ul className="list-group d-flex flex-row justify-content-center ">
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <InfoOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <BorderColorOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                  <li className="list-group-item border-0">
                    <div className="icon-bottom land">
                      <DeleteOutlineOutlinedIcon className="land-buttom-icons" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12 pagination-area mt-3">
            <Stack spacing={2}>
              <Pagination
                count={10}
                sx={{ color: "#ff8000" }}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllHotelsDisplay;
