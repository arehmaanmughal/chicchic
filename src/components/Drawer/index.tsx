import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import MessageIcon from "@mui/icons-material/Message";
import profile from "../../../public/images/profile.jpg";
import Image from "next/image";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { useRouter } from "next/navigation";
import AccountMenu from "../AccountMenu";
import Searchbar from "../Searchbar";

const drawerWidth = 240;

const StaffList = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StaffMember = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

const staffMembers = [
  { name: "Jane Doe", role: "Receptionist", image: profile },
  { name: "John Smith", role: "Hair Stylist", image: profile },
  { name: "Emily Johnson", role: "Nail Technician", image: profile },
];

interface Props {
  window?: () => Window;
}

export default function LeftDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menus = [
    { title: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    { title: "Appointments", path: "/appointments", icon: <CalendarTodayIcon /> },
    { title: "Reports", path: "/reports", icon: <AssessmentIcon /> },
    { title: "Settings", path: "/settings", icon: <SettingsIcon /> },
    { title: "Help", path: "/help", icon: <HelpIcon /> },
    { title: "Feedback", path: "/feedback", icon: <FeedbackIcon /> },
    { title: "Notifications", path: "/notifications", icon: <NotificationsIcon /> },
    { title: "Users", path: "/users", icon: <PeopleIcon /> },
    { title: "Analytics", path: "/analytics", icon: <BarChartIcon /> },
    { title: "Messages", path: "/messages", icon: <MessageIcon /> },
  ];

  const drawerContent = (
    <div>
      <div className="flex flex-col gap-2 items-center p-3">
        <Image src={profile} alt="profile" width={80} height={80} className="rounded-full" />
        <div className="flex flex-col items-center">
          <Typography noWrap component="h6" className="text-black text-md sm:text-xl font-bold">
            Mitchell Stark
          </Typography>
          <Typography noWrap component="p" className="text-black text-xs opacity-70">
            Salon Manager
          </Typography>
        </div>
      </div>
      <Divider />
      <List>
        {menus.map((menu) => (
          <ListItem key={menu.path} disablePadding>
            <ListItemButton
              sx={{
                color: "primary.dark",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  color: "primary.main",
                },
              }}
              onClick={() => router.push(menu.path)}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",
                }}
              >
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <StaffList>
        <Typography variant="h6" component="h3" sx={{ mb: 2 }} className="text-xl text-black font-bold">
          Staff Members
        </Typography>
        {staffMembers.map((staff) => (
          <StaffMember key={staff.name}>
            <Image src={staff.image} alt={staff.name} width={40} height={40} className="rounded-full" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="body1" component="p" className="text-black font-semibold text-md">
                {staff.name}
              </Typography>
              <Typography variant="body2" component="p" className="text-black text-sm">
                {staff.role}
              </Typography>
            </Box>
          </StaffMember>
        ))}
      </StaffList>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - 275px)` },
            m: { md: "20px" },
            ml: { sm: `${drawerWidth}px` },
            borderRadius: { md: "8px" },
          }}
        >
          <Toolbar>
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    display: { md: "none" },
                    color: "white",
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <h3 className="text-xl font-bold text-white">ChicChic</h3>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:block md:hidden lg:block">
                  <Searchbar />
                </div>
                <AccountMenu />
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
          aria-label="navigation menu"
        >
          <Drawer
            container={container}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                overflow: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              },
              backgroundColor: "primary.main",
            }}
          >
            {drawerContent}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                overflow: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
