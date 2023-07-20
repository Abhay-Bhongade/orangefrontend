import "../AllImpactorsDisplay/all-impactors.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import profile1 from "../../assets/profile-6.jpg";
import profile2 from "../../assets/profile-7.jpg";
import profile3 from "../../assets/profile-8.jpg";
import profile4 from "../../assets/profile-9.jpg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AllImpactorsDisplay = () => {
  return (
    <>
      {/* top-nav-tow-start */}
      <div className="top-nav-bar-tow">
        <div className="right-side-text-nbt">
          <p>All Inspector</p>
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
          <div className="col-md-4 my-3 ">
            <div className="main-card-re-area active-card">
              <div className="left-side-img-area">
                <img src={profile1} alt="" />
              </div>
              <div className="right-side-text-area">
                <div className="name-area-r">
                  <div className="right-name-r">
                    <p>Michel</p>
                  </div>
                  <button className="left-btn-name-r">Active</button>
                </div>
                <div className="main-area mb-3 border-bottom">
                  <p>kauramritjot@gmail.com</p>
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
          </div>
          <div className="col-md-4 my-3">
            <div className="main-card-re-area inactive-card">
              <div className="left-side-img-area">
                <img src={profile2} alt="" />
              </div>
              <div className="right-side-text-area">
                <div className="name-area-r">
                  <div className="right-name-r">
                    <p>Jack</p>
                  </div>
                  <button className="left-btn-name-r-inactive">Inactive</button>
                </div>
                <div className="main-area mb-3 border-bottom">
                  <p>kauramritjot@gmail.com</p>
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
          </div>
          <div className="col-md-4 my-3">
            <div className="main-card-re-area active-card">
              <div className="left-side-img-area">
                <img src={profile3} alt="" />
              </div>
              <div className="right-side-text-area">
                <div className="name-area-r">
                  <div className="right-name-r">
                    <p>Michel</p>
                  </div>
                  <button className="left-btn-name-r">Active</button>
                </div>
                <div className="main-area mb-3 border-bottom">
                  <p>kauramritjot@gmail.com</p>
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
          </div>
          <div className="col-md-4 my-3">
            <div className="main-card-re-area inactive-card">
              <div className="left-side-img-area">
                <img src={profile4} alt="" />
              </div>
              <div className="right-side-text-area">
                <div className="name-area-r">
                  <div className="right-name-r">
                    <p>Jack</p>
                  </div>
                  <button className="left-btn-name-r-inactive">Inactive</button>
                </div>
                <div className="main-area mb-3 border-bottom">
                  <p>kauramritjot@gmail.com</p>
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
          </div>
          {/* <div className="col-md-4 my-3">
            <div className="main-card-re-area active-card">
              <div className="left-side-img-area">
                <img src={profile1} alt="" />
              </div>
              <div className="right-side-text-area">
                <div className="name-area-r">
                  <div className="right-name-r">
                    <p>Michel</p>
                  </div>
                  <button className="left-btn-name-r">Active</button>
                </div>
                <div className="main-area mb-3 border-bottom">
                  <p>kauramritjot@gmail.com</p>
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
          </div>
          <div className="col-md-4 my-3">
            <div className="main-card-re-area inactive-card">
              <div className="left-side-img-area">
                <img src={profile2} alt="" />
              </div>
              <div className="right-side-text-area">
                <div className="name-area-r">
                  <div className="right-name-r">
                    <p>Jack</p>
                  </div>
                  <button className="left-btn-name-r-inactive">Inactive</button>
                </div>
                <div className="main-area mb-3 border-bottom">
                  <p>kauramritjot@gmail.com</p>
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
          </div> */}
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

export default AllImpactorsDisplay;
