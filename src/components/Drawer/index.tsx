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
import profile from "../../../public/images/profile.jpg";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";

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
  ];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const drawerContent = (
    <div>
      <ProfileHeader className="bg-slate-100">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="w-[100px] h-[100px]"
        />
      </ProfileHeader>
      <Divider />
      <List>
        {menus.map((menu) => (
          <ListItem key={menu.path} disablePadding>
            <Link href={menu.path} className="w-full">
              <ListItemButton className="hover:bg-blue-100">
                <ListItemIcon className="text-gray-700">
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  primary={menu.title}
                  className="text-gray-700 text-md font-bold"
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="bg-red-400"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <div className="w-full flex justify-between items-center">
            <div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                className="text-white"
              >
                Salon Scheduler
              </Typography>
            </div>

            <Box sx={{ flexGrow: 0 }}>
              <div className="flex items-center gap-3">
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Image
                      src={profile}
                      alt="User Picture"
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                  </IconButton>
                </Tooltip>
                <div className="flex flex-col">
                  <Typography
                    noWrap
                    component="h6"
                    className="text-white text-md font-bold"
                  >
                    Abdul Rehman
                  </Typography>
                  <Typography
                    noWrap
                    component="p"
                    className="text-white text-xs"
                  >
                    Salon Scheduler
                  </Typography>
                </div>
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
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
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
  );
}
