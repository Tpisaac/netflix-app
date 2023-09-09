import React, { lazy, Suspense } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Account from "./pages/Account";
// import ProtectedRoute from "./components/ProtectedRoute";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Account = lazy(() => import("./pages/Account"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const AuthContextProvider = lazy(() =>
  import("./context/AuthContext").then((module) => {
    return { default: module.AuthContextProvider };
  })
);

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </Suspense>
    </div>
  );
}

export default App;
