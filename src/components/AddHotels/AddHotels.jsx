import '../AddHotels/add-hotels.css'
import uploadImg from '../../assets/upload-img-remove.png'
import { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import OrCode from "../../assets/orange-qr.png";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import imageURL from '../../assets/roon-3.png'
import { ColorLens } from '@mui/icons-material';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // backgroundImage: `url(${imageURL})`,
  // backgroundPosition: "center",
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  boxShadow: 24,
  borderRadius: 3,
//   p: 4,
};

const AddHotels = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
      {/* top-nav-tow-start */}
      <div className="top-nav-bar-tow">
        <div className="right-side-text-nbt">
          <p>Add Hotels</p>
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
          <div className="col-md-8 form-main-container">
            <div className="form-main-area mb-3">
              <div className="form-heading mb-3">
                <p>Hotels Details</p>
              </div>
              <div className="mt-3">
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="mb-3 row">
                  {" "}
                  <div className="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Longitude</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Required this field"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="mb-3">
                      <label class="form-label">Latitude</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Required this field"
                      />
                    </div>
                  </div>
                </div>
                <div className="btn-form-area mt-4">
                  <button class="btn form-btn" onClick={handleOpen}>
                    Generate QR Code
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="galary-area">
              <div className="galary-area-heading ">
                <p>Upload Hotel Image</p>
              </div>
              <div className="add-img mt-3">
                <img src={uploadImg} alt="" />
              </div>
              <div className="btn-galary-area mt-4">
                <button type="button" class="btn btn-outline uplaod-btn">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal-area-start */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div className="main-modal-container">
            <div className="heading-area ">
              <div className="right-side-text-area-modal">
                <p>QR CODE</p>
              </div>
              <div className="left-side-btn-area-modal" onClose={handleClose}>
                <CancelOutlinedIcon className="coss-icon-modal" />
              </div>
            </div>
            <div className="img-text-main-modal mb-3">
              <div className="left-side-img-modal  ">
                <img src={OrCode} alt="" />
              </div>
              <div className="right-side-text-modal">
                <div className="date-icon-text-area mb-3">
                  {/* <div className="right-side-icon-modal me-3">
                    <LocationCityIcon className="modal-date-icon" />
                  </div> */}
                  <div className="left-side-text-date-modal">
                    <p>Hilton Atlanta</p>
                  </div>
                </div>
                <div className="date-icon-text-area mb-4">
                  <div className="right-side-icon-modal me-1">
                    <CalendarMonthOutlinedIcon className="modal-date-icon" />
                  </div>
                  <div className="left-side-text-date-modal date">
                    <p>22 Dec 2022</p>
                  </div>
                </div>

                <div className="btn down-btn ">Download</div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      {/* modal-area-end */}
    </>
  );
}

export default AddHotels