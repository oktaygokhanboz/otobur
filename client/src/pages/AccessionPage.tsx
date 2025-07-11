import { useEffect, useState } from "react";
import { getAccessions } from "../services/accession.service";
import { DataGrid } from "@mui/x-data-grid";

const AccessionPage = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAccessions();
        setRows(response.data);
      } catch (error) {
        console.error("Veri çekilemedi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "accession_number", headerName: "Aksesyon No", width: 150 },
    { field: "plant_name", headerName: "Bitkinin Adı", width: 180 },
    { field: "material", headerName: "Materyal Çeşidi", width: 120 },
    {
      field: "origin",
      headerName: "Köken",
      width: 180,
      renderCell: (params: any) => {
        switch (params.value) {
          case "natural":
            return "Doğal";
          case "culture_origin_known":
            return "Kültür: Köken Biliniyor";
          case "culture_origin_unknown":
            return "Kültür: Köken Bilinmiyor";
          default:
            return "Köken bilgisi yok";
        }
      },
    },
    {
      field: "location",
      headerName: "Lokasyon",
      width: 220,
      renderCell: (params: any) => params.value || "—",
    },
    {
      field: "latitude",
      headerName: "Enlem",
      width: 130,
      renderCell: (params: any) => params.value || "—",
    },
    {
      field: "longitude",
      headerName: "Boylam",
      width: 130,
      renderCell: (params: any) => params.value || "—",
    },
    {
      field: "collection_date",
      headerName: "Toplanma Tarihi",
      width: 160,
      renderCell: (params: any) =>
        params.value ? new Date(params.value).toLocaleDateString("tr-TR") : "—",
    },
    {
      field: "collector_name",
      headerName: "Toplayıcı Adı",
      width: 180,
      renderCell: (params: any) => params.value || "—",
    },
    {
      field: "collector_code",
      headerName: "Toplayıcı Kodu",
      width: 120,
      renderCell: (params: any) => params.value || "—",
    },
    {
      field: "collection_number",
      headerName: "Toplanma Numarası",
      width: 150,
      renderCell: (params: any) => params.value || "—",
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <h2>Aksesyon Defteri</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default AccessionPage;
