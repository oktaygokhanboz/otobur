import { useEffect, useState } from "react";
import { getAccessions } from "../services/herbarium.service";
import { DataGrid } from "@mui/x-data-grid";

const HerbariumPage = () => {
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
    { field: "herbarium_no", headerName: "Herbaryum No", width: 120 },
    { field: "plant_name", headerName: "Bitki Adı", width: 180 },
    { field: "collector_name", headerName: "Toplayıcı Adı", width: 200 },
    { field: "collector_code", headerName: "Toplayıcı Kodu", width: 120 },
    { field: "collection_number", headerName: "Toplanma No", width: 120 },
    { field: "location", headerName: "Lokasyon", width: 300 },
    { field: "latitude", headerName: "Enlem", width: 120 },
    { field: "longitude", headerName: "Boylam", width: 120 },
    { field: "accession_number", headerName: "Aksesyon No", width: 120 },
    { field: "is_photo", headerName: "Fotoğraf", width: 100 },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <h2>Herbaryum Tablosu</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default HerbariumPage;
