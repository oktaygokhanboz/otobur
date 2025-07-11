import { useEffect, useState } from "react";
import { getAccessions } from "../services/seed-bank.service";
import { DataGrid } from "@mui/x-data-grid";

const SeedBankPage = () => {
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
    { field: "accession_number", headerName: "Aksesyon No", width: 120 },
    { field: "plant_name", headerName: "Bitki Adı", width: 180 },
    { field: "quantity", headerName: "Miktar", width: 300 },
    { field: "locker_code", headerName: "Dolap Kodu", width: 180 },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <h2>Tohum Bankası Tablosu</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default SeedBankPage;
