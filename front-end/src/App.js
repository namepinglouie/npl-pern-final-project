// DEPENDENCIES
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// PAGES
import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import Show from "./pages/Show.js";
import Edit from "./pages/Edit.js";
import New from "./pages/New.js";
import FourOFour from "./pages/FourOFour.js";

// COMPONENTS
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return(
    <div className="app">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/oatmeals" element = {<Index />} />
            <Route path = "/oatmeals/new" element = {<New />} />
            <Route path = "/oatmeals/:id" element = {<Show />} />
            <Route path = "/oatmeals/:id/edit" element = {<Edit />} />
            <Route path = "*" element = {<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
