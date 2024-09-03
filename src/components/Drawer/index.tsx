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
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { Menu, ThemeProvider, Tooltip } from "@mui/material";
import theme from "@/theme";
import { useRouter } from "next/navigation";
import { AccountCircle, LogoutOutlined } from "@mui/icons-material";

const drawerWidth = 240;

const ProfileHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  flexDirection: "column",
  textAlign: "center",
  background: theme.palette.background.default,
}));

interface Props {
  window?: () => Window;
}

export default function LeftDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const router = useRouter();
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const menus = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Appointments",
      path: "/appointments",
      icon: <CalendarTodayIcon />,
    },
    {
      title: "Reports",
      path: "/reports",
      icon: <AssessmentIcon />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <SettingsIcon />,
    },
    {
      title: "Help",
      path: "/help",
      icon: <HelpIcon />,
    },
    {
      title: "Feedback",
      path: "/feedback",
      icon: <FeedbackIcon />,
    },
    {
      title: "Notifications",
      path: "/notifications",
      icon: <NotificationsIcon />,
    },
    {
      title: "Users",
      path: "/users",
      icon: <PeopleIcon />,
    },
    {
      title: "Analytics",
      path: "/analytics",
      icon: <BarChartIcon />,
    },
    {
      title: "Messages",
      path: "/messages",
      icon: <MessageIcon />,
    },
  ];

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const settings = [
    {
      title: "Account",
      path: "/account",
      icon: <AccountCircle />,
    },
    {
      title: "Logout",
      path: "/signin",
      icon: <LogoutOutlined />,
    },
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawerContent = (
    <div className="">
      <ProfileHeader>
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className=""
        />
      </ProfileHeader>
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
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { md: `calc(100% - 275px)` },
            m:{ md:"20px"},
            ml: { sm: `${drawerWidth}px` },
            borderRadius : {md : "8px"}
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
                <div className="flex flex-col">
                  <Typography
                    noWrap
                    component="h6"
                    className="text-white text-md sm:text-xl font-bold"
                  >
                    Abdul Rehman
                  </Typography>
                  <Typography
                    noWrap
                    component="p"
                    className="text-white text-xs"
                  >
                    Salon Manager
                  </Typography>
                </div>
              </div>

              <Box sx={{ flexGrow: 0 }}>
                <div className="flex items-center gap-3">
                  <Tooltip title="profile">
                    <button
                      onClick={handleOpenUserMenu}
                      className="flex items-center gap-2"
                    >
                      <Image
                        src={profile}
                        alt="User Picture"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                      />
                    </button>
                  </Tooltip>
                </div>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <ListItem key={setting.path} disablePadding>
                      <ListItemButton
                        sx={{
                          color: "primary.dark",                  
                          "&:hover": {
                            backgroundColor: "secondary.main",
                            color: "primary.main",
                          },
                        }}
                        onClick={() => router.push(setting.path)}
                      >
                        <ListItemIcon
                          sx={{
                            color: "inherit",
                          }}
                        >
                          {setting.icon}
                        </ListItemIcon>
                        <ListItemText primary={setting.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Menu>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth },  flexShrink: { md: 0 } }}
          aria-label="mailbox folders"
          
        >
          <Drawer
            container={container}
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
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
