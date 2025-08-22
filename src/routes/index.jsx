import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayouts from "../layout/index";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import EventList from "../pages/events/EventList"
import EventPage from "../pages/events/EventPage"
import AddMembersPage from "../pages/events/AddMembersPage";
import DecodeQr from "../Verification/DecodeQr"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // 👈 default page at "/"
        element: <h1 className="text-3xl p-5">Welcome to Anwesha 🚀</h1>,
      },
      {
        path: "register",
        element: (
          <AuthLayouts>
            <RegisterPage />
          </AuthLayouts>
        ),
      },
      {
        path: "login",
        element: (
          <AuthLayouts>
            <LoginPage />
          </AuthLayouts>
        ),
      },
      {
        path: "events",
        element: (
          <AuthLayouts>
            <EventList />
          </AuthLayouts>
        ),

      },
      {
        path: "/event/:id",
        element: (
          <AuthLayouts>
            <EventPage />
          </AuthLayouts>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayouts>
            <DashboardPage />
          </AuthLayouts>
        ),
      },
      {
        path: "/event/:id/add-members",
        element: (
          <AuthLayouts>
            <AddMembersPage />
          </AuthLayouts>
        )
      },
      {
        path: "/verify",
        element: (
          <AuthLayouts>
            <DecodeQr />
          </AuthLayouts>
        ),
      },


    ],
  },
]);

export default router;
