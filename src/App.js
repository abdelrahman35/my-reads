import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SearchPage from "./Pages/SearchPage/SearchPage";
import Navbar from "./Components/NavBar/Navbar";
import AboutUs from "./Pages/AboutUS/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import MyCatalog from "./Pages/MyCatalog/MyCatalog";
import BookDetails from "./Pages/BookDetails/BookDetails";
function App() {
  return (
    <>
      <Router>
        <Navbar />{" "}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/catalog" element={<MyCatalog />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
