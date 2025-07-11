import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import AccessionPage from "../pages/AccessionPage";
import CollectorPage from "../pages/CollectorPage";
import ConditionPage from "../pages/ConditionPage";
import HerbariumPage from "../pages/HerbariumPage";
import SeedBankPage from "../pages/SeedBankPage";
import UserPage from "../pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "accession", element: <AccessionPage /> },
      { path: "collector", element: <CollectorPage /> },
      { path: "condition", element: <ConditionPage /> },
      { path: "herbarium", element: <HerbariumPage /> },
      { path: "seed-bank", element: <SeedBankPage /> },
      { path: "user", element: <UserPage /> },
    ],
  },
]);

export default router;
