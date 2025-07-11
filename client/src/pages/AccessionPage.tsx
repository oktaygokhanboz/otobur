import { useEffect, useState } from "react";
import { getAccessions } from "../services/accession.service";
import { DataGrid } from "@mui/x-data-grid";

const AccessionPage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getAccessions().then((data) => setRows(data));
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "accession_number", headerName: "Accession Number", width: 200 },
    { field: "scientific_name", headerName: "Scientific Name", width: 200 },
    // diğer kolonlar
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <h2>Accessions</h2>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default AccessionPage;
