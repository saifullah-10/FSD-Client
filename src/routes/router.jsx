import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Error from "../error/Error";
import Root from "../Root";
import Role from "../pages/Role";
import Registration from "../pages/Registration";
import Dashboard from "../dashboard/Dashboard";

import SendMoney from "../dashboard/components/SendMoney";
import CashOut from "../dashboard/components/CashOut";
import CashIn from "../dashboard/components/CashIn";
import History from "../dashboard/components/History";

import TrHistory from "../dashboard/components/agent/TrHistory";
import TrManagement from "../dashboard/components/agent/TrManagement";

import SystemManagement from "../dashboard/components/admin/SystemManagement";
import UserManagement from "../dashboard/components/admin/UserManagement";
import DefaultDashboard from "../dashboard/components/DefaultDashboard";
import ProtectedRoute from "../protectedUser/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/role",
        element: <Role />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <DefaultDashboard />,
          },
          {
            path: "/dashboard/send-money",
            element: <SendMoney />,
          },
          {
            path: "/dashboard/cash-out",
            element: <CashOut />,
          },
          {
            path: "/dashboard/cash-in",
            element: <CashIn />,
          },
          {
            path: "/dashboard/history",
            element: <History />,
          },
          {
            path: "/dashboard/tr-management",
            element: <TrManagement />,
          },
          {
            path: "/dashboard/tr-history",
            element: <TrHistory />,
          },

          {
            path: "/dashboard/system-management",
            element: <SystemManagement />,
          },
          {
            path: "/dashboard/user-management",
            element: <UserManagement />,
          },
        ],
      },
    ],
  },
]);
export default router;
