import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TopNavbar from "./components/TopNavbar/TopNavbar";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Button from "@mui/material/Button";
import HotelImg from "./assets/hotels-3.jpg";
import HotelImg2 from "./assets/hotels-4.jpg";
import HotelImg3 from "./assets/hotels-5.webp";
import HotelImg4 from "./assets/hotels-6.jpg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import AllHotelsDisplay from "./components/AllHotelsDisplay/AllHotelsDisplay";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Dashboard } from "@mui/icons-material";
import AddHotels from "./components/AddHotels/AddHotels";
import AllRecruitersDisplay from "./components/AllRecruitersDisplay/AllRecruitersDisplay";
import AllImpactorsDisplay from "./components/AllImpactorsDisplay/AllImpactorsDisplay";
import ViewHotel from "./components/ViewHotel/ViewHotel";

function App() {
  return (
    <>
      <Router>
        <TopNavbar />
        <div className="container-fluid ">
          <div className="row">
            <SideNavbar />
            <div className="col-md-10 hh main-dash-area p-0 bg-light ">
              <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route path="/all-hotels" element={<AllHotelsDisplay />} />
                <Route path="/add-hotels" element={<AddHotels />} />
                <Route
                  path="/all-recuiters"
                  element={<AllRecruitersDisplay />}
                />
                <Route
                  path="/all-impactorrs"
                  element={<AllImpactorsDisplay />}
                />
                <Route path="/view-hotel" element={<ViewHotel />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
