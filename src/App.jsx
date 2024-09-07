import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// Rute Admin
import Dashboard from "./pages/admin/dashboard/index";
import AdminDrama from "./pages/admin/drama/index";
import AdminUser from "./pages/admin/userList/index";
import AdminCreateUser from "./pages/admin/userList/create";
import AdminKalender from "./pages/admin/kalender/index";
import AdminKarakter from "./pages/admin/karakter/index";
import AdminSkenario from "./pages/admin/skenario/index";
import AdminExercise from "./pages/admin/exercise/index";

// Rute Web
import Beranda from "./pages/web/beranda";
import Login from "./pages/web/login";
import SignUp from "./pages/web/signup";
import Drama from "./pages/web/drama/index";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Admin dengan proteksi */}
        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute element={Dashboard} />}
        />
        <Route
          path="/admin/drama"
          element={<ProtectedRoute element={AdminDrama} />}
        />
        <Route
          path="/admin/user"
          element={<ProtectedRoute element={AdminUser} />}
        />
        <Route
          path="/admin/user/create"
          element={<ProtectedRoute element={AdminCreateUser} />}
        />
        <Route
          path="/admin/kalender"
          element={<ProtectedRoute element={AdminKalender} />}
        />
        <Route
          path="/admin/karakter"
          element={<ProtectedRoute element={AdminKarakter} />}
        />
        <Route
          path="/admin/skenario"
          element={<ProtectedRoute element={AdminSkenario} />}
        />
        <Route
          path="/admin/exercise"
          element={<ProtectedRoute element={AdminExercise} />}
        />

        {/* Rute Web tanpa proteksi */}
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Rute User dengan proteksi */}
        <Route
          path="/user/drama"
          element={<ProtectedRoute element={Drama} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
