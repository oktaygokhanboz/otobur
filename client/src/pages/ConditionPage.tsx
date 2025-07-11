import { useEffect, useState } from "react";
import { getAccessions } from "../services/condition.service";
import { DataGrid } from "@mui/x-data-grid";

const ConditionPage = () => {
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
    { field: "accession_number", headerName: "Aksesyon No", width: 180 },
    { field: "plant_name", headerName: "Bitki Adı", width: 180 },
    {
      field: "observation_date",
      headerName: "Gözlem Tarihi",
      width: 150,
      renderCell: (params: any) =>
        params.value ? new Date(params.value).toLocaleDateString("tr-TR") : "—",
    },
    { field: "garden_location", headerName: "Bahçe Lokasyonu", width: 240 },
    { field: "location_code", headerName: "Yer Kodu", width: 90 },
    { field: "status", headerName: "Bitki Durumu", width: 120 },
    { field: "vegetation_status", headerName: "Vejetasyon Durumu", width: 180 },
    { field: "observer_name", headerName: "Gözlemci Adı", width: 150 },
    {
      field: "observation",
      headerName: "Gözlem",
      width: 300,
      renderCell: (params: any) => params.value || "—",
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <h2>Bitki Durum Tablosu</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default ConditionPage;
