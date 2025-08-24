import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

// Layouts
import MainLayout from "../layouts/MainLayout";
import NotFound from "../components/NotFound";
import SignInPage from "../pages/SignInPage"; // fix typo: "SingIn" → "SignIn"
// import DashboardLayout from "../layouts/DashboardLayout";

// Lazy loaded pages
const Home = lazy(() => import("../pages/Home"));
// const DashboardHome = lazy(() => import("../pages/dashboard/DashboardHome"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInPage />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard/*"
            element={
              <SignedIn>
                {/* Replace with your DashboardLayout */}
                <div className="p-10">
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
              </SignedIn>
            }
          />
          <Route
            path="/dashboard/*"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
