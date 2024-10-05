import logo from "./assets/Header/Logo.png";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Support from "./pages/Support";
import Content from "./components/Content";
import Page1 from "./pages/Read/Page1";
import PreAssessment from "./pages/PreAssesment";
import FinalAssessment from "./pages/FinalAssessment";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Router>
        <Routes>
          <Route
            path="/admin"
            element={
              <>
                <AdminDashboard />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <div className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/content" element={<Content />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/preAssement" element={<PreAssessment />} />
                    <Route
                      path="/finalassesment"
                      element={<FinalAssessment />}
                    />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
