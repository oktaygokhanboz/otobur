import { useEffect, useState } from "react";
import { getAccessions } from "../services/user.service";
import { DataGrid } from "@mui/x-data-grid";

const UserPage = () => {
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
    { field: "name", headerName: "Kullanıcı Adı", width: 180 },
    { field: "password", headerName: "Parola", width: 120 },
    {
      field: "user_role",
      headerName: "Kullanıcı Rolü",
      width: 150,
      renderCell: (params: any) => {
        switch (params.value) {
          case "admin":
            return "Sistem Yöneticisi";
          case "normal":
            return "Normal Kullanıcı";
          case "education":
            return "Eğitimde";
          default:
            return "—";
        }
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "100%" }}>
      <h2>Kullanıcı Yetkileri Tablosu</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default UserPage;
