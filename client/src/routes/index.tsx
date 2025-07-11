import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import AccessionPage from "../pages/AccessionPage";
// Diğer sayfaları da ekle

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "accession", element: <AccessionPage /> },
      // Diğerleri
    ],
  },
]);

export default router;
