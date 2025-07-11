import { Outlet, NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const links = [
  { text: "Accession", path: "/accession" },
  { text: "Collector", path: "/collector" },
  { text: "Condition", path: "/condition" },
  { text: "Herbarium", path: "/herbarium" },
  { text: "Seed Bank", path: "/seed-bank" },
  { text: "User", path: "/user" },
];

const DashboardLayout = () => {
  return (
    <Box display="flex">
      <Drawer variant="permanent" sx={{ width: 240 }}>
        <List>
          {links.map((link) => (
            <ListItem disablePadding key={link.text}>
              <ListItemButton component={NavLink} to={link.path}>
                <ListItemIcon>
                  <LocalFloristIcon />
                </ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
