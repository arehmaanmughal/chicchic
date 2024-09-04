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
import profile2 from "../../../public/images/profile2.jpg";
import Image from "next/image";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import { usePathname, useRouter } from "next/navigation";
import AccountMenu from "../AccountMenu";
import Searchbar from "../Searchbar";

const drawerWidth = 240;

const staffMembers = [
  { name: "Jane Doe", role: "Receptionist", image: profile2 },
  { name: "John Smith", role: "Hair Stylist", image: profile },
  { name: "Emily Johnson", role: "Nail Technician", image: profile2 },
];

interface Props {
  window?: () => Window;
}

export default function LeftDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menus = [
    { title: "Dashboard", path: "/", icon: <DashboardIcon /> },
    {
      title: "Appointments",
      path: "/appointments",
      icon: <CalendarTodayIcon />,
    },
    { title: "Reports", path: "/reports", icon: <AssessmentIcon /> },
    { title: "Settings", path: "/settings", icon: <SettingsIcon /> },
    { title: "Help", path: "/help", icon: <HelpIcon /> },
    { title: "Feedback", path: "/feedback", icon: <FeedbackIcon /> },
    {
      title: "Notifications",
      path: "/notifications",
      icon: <NotificationsIcon />,
    },
    { title: "Users", path: "/users", icon: <PeopleIcon /> },
    { title: "Analytics", path: "/analytics", icon: <BarChartIcon /> },
    { title: "Messages", path: "/messages", icon: <MessageIcon /> },
  ];

  const drawerContent = (
    <div>
      <div className="flex flex-col gap-2 items-center p-3">
        <Image
          src={profile}
          alt="profile"
          width={80}
          height={80}
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-col items-center">
          <h6 className="text-black text-md sm:text-xl font-bold">
            Mitchell Stark
          </h6>
          <p className="text-black text-xs">Salon Manager</p>
        </div>
      </div>
      <Divider />
      <List>
        {menus.map((menu) => (
          <ListItem key={menu.path} disablePadding>
            <ListItemButton
              onClick={() => router.push(menu.path)}
              sx={{ color: menu.path === "/" ? "primary.main" : "" }}
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

      <div className="px-4 flex flex-col gap-3">
        <h6 className="text-sm text-black">Staff Members</h6>
        {staffMembers.map((staff) => (
          <div className="flex items-center gap-3" key={staff.name}>
            <Image
              src={staff.image}
              alt={staff.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p className="text-black font-semibold text-md">{staff.name}</p>
              <p className="text-black text-sm">{staff.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            backgroundColor: "secondary.main", // Add background color to the parent Box
            zIndex: 1, // Ensure it is on top
            height: "100px",
            position: "fixed",
          }}
        >
          <AppBar
            position="fixed"
            sx={{
              width: { md: `calc(100% - ${drawerWidth + 35}px)` },
              m: { md: "20px" },
              ml: { sm: `${drawerWidth}px` },
              borderRadius: { md: "8px" },
              zIndex: 1201, // Set higher zIndex to ensure it's on top
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
        </Box>
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
