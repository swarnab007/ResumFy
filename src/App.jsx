import react from "react";
import "./App.css";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/custom/Header.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  // Protected route
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <>
      <Header />
      <Toaster reverseOrder={false} />
      <Outlet />
    </>
  );
}

export default App;
