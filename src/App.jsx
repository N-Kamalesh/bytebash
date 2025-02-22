import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        containerStyle={{ zIndex: 500001 }}
        duration={2000}
        toastOptions={{
          success: {
            style: {
              background: "rgb(22, 101, 52, 0.80)",
              border: "1px solid rgb(76, 175, 80)",
              backdropFilter: "blur(10px)",
              color: "white",
            },
          },
          error: {
            style: {
              background: "rgb(159, 18, 57, 0.80)",
              border: "1px solid rgb(244, 67, 54)",
              backdropFilter: "blur(10px)",
              color: "white",
            },
          },
          loading: {
            style: {
              background: "rgb(124, 45, 18, 0.80)",
              border: "1px solid rgb(124, 45, 18)",
              backdropFilter: "blur(10px)",
              color: "white",
            },
          },
        }}
      />
      <AuthProvider>
        <div className="min-h-screen relative">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
