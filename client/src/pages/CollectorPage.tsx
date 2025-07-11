import { useEffect, useState } from "react";
import { getAccessions } from "../services/collector.service";
import { DataGrid } from "@mui/x-data-grid";

const CollectorPage = () => {
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
    { field: "name", headerName: "Toplayıcı Adı", width: 180 },
    { field: "code", headerName: "Toplayıcı Kodu", width: 120 },
    { field: "phone", headerName: "Telefon", width: 150 },
    { field: "email", headerName: "E-posta", width: 220 },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <h2>Toplayıcılar Defteri</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default CollectorPage;
