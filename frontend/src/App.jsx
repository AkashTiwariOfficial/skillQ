import { useUser } from "@clerk/react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import ProblemsPage from "./Pages/ProblemsPage";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./Pages/DashboardPage";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={!isSignedIn ? <HomePage /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <DashboardPage /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}

export default App;
