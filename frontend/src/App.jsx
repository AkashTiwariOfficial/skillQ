import { useUser } from "@clerk/react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import ProblemsPage from "./Pages/ProblemsPage.jsx";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./Pages/DashboardPage.jsx";
import PorblemSolvingPage from "./Pages/PorblemSolvingPage.jsx";
import SessionPage from "./Pages/SessionPage.jsx";

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
        <Route
          path="/problem/:id"
          element={isSignedIn ? <PorblemSolvingPage /> : <Navigate to="/" />}
        />
        <Route
          path="/session/:id"
          element={isSignedIn ? <SessionPage /> : <Navigate to="/" />}
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
