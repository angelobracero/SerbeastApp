import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import RootLayout from "./pages/RootLayout";
import ProfessionalInfo from "./components/customer/ProfessionalInfo";
import ProfessionalPage from "./pages/ProfessionalPage";

import ProfessionalLayout from "./pages/ProfessionalLayout";
import Dashboard from "./components/professional/Dashboard";
import PendingBookings from "./components/professional/PendingBookings";
import ConfirmedBookings from "./components/professional/ConfirmedBookings";
import CompletedBookings from "./components/professional/CompletedBookings";
import MyServices from "./components/professional/MyServices";
import AccountSettings from "./components/professional/AccountSettings";
import AccountSettingsEdit from "./components/professional/AccountSettingsEdit";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { UserBookings } from "./components/customer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "professionals",
        element: <ProfessionalPage />,
      },
      {
        path: "professionals/:id",
        element: <ProfessionalInfo />,
      },
      {
        path: "bookings",
        element: <UserBookings />,
      },
      {
        path: "services/:id",
        element: <ServicePage />,
      },
    ],
  },
  {
    path: "/p",
    element: <ProfessionalLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute role="professional">
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "services",
        element: (
          <ProtectedRoute role="professional">
            <MyServices />
          </ProtectedRoute>
        ),
      },
      {
        path: "pending-bookings",
        element: (
          <ProtectedRoute role="professional">
            <PendingBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "confirmed-bookings",
        element: (
          <ProtectedRoute role="professional">
            <ConfirmedBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "completed-bookings",
        element: (
          <ProtectedRoute role="professional">
            <CompletedBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "account",
        element: (
          <ProtectedRoute role="professional">
            <AccountSettings />
          </ProtectedRoute>
        ),
      },
      {
        path: "account-edit",
        element: (
          <ProtectedRoute role="professional">
            <AccountSettingsEdit />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        closeOnClick="true"
      />
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
