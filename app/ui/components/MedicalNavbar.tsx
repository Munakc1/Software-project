'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@mui/material";
import {
  Calendar,
  FileText,
  Shield,
  Pill,
  Bell,
  User,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
import {
  Menu as MuiMenu,
  MenuItem,
  ListItemButton,
  Divider,
  Badge,
  IconButton,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Drawer,
  Box
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

interface NavItem {
  name: string;
  path: string;
}

const navigationItems: NavItem[] = [
  { name: "Medical Records", path: "/medical-records" },
  { name: "Appointments", path: "/appointments" },
  { name: "Prescriptions", path: "/prescriptions" },
  { name: "Vaccination", path: "/vaccination" },
  { name: "Ambulance", path: "/ambulance" },
];

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const notifications: Notification[] = [
  
  {
    id: 2,
    title: 'Upcoming Appointment',
    description: 'Tomorrow at 10:00 AM',
    time: '1 day ago',
    read: true
  },
  {
    id: 3,
    title: 'Lab Results Available',
    description: 'CBC report ready for review',
    time: '3 days ago',
    read: true
  }
];

export function MedicalNavbar() {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
  const [registerAnchorEl, setRegisterAnchorEl] = useState<null | HTMLElement>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Initialize theme and notifications
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    
    const unread = notifications.filter(n => !n.read).length;
    setUnreadCount(unread);
  }, []);

  // Apply theme changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isActive = (path: string) => pathname === path;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget);
    setUnreadCount(0);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleRegisterOpen = (event: React.MouseEvent<HTMLElement>) => {
    setRegisterAnchorEl(event.currentTarget);
  };

  const handleRegisterClose = () => {
    setRegisterAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // MUI theme with custom medical colors
  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: theme === "dark" ? "#2E7D32" : "#2A7F62",
      },
      secondary: {
        main: theme === "dark" ? "#1E3A4D" : "#3A5E6D",
      },
      error: {
        main: theme === "dark" ? "#FF5252" : "#D32F2F",
      },
      success: {
        main: theme === "dark" ? "#4CAF50" : "#388E3C",
      },
      background: {
        default: theme === "dark" ? "#121212" : "#FFFFFF",
        paper: theme === "dark" ? "#1E1E1E" : "#F5F9F8",
      },
      text: {
        primary: theme === "dark" ? "#E0E0E0" : "#2D3748",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
            padding: '8px 16px'
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

  const drawer = (
    <Box 
      sx={{ 
        width: 250,
        backgroundColor: theme === "dark" ? "#1E1E1E" : "#F5F9F8",
        height: '100%',
        padding: '20px 0'
      }}
    >
      <List>
        {navigationItems.map((item) => (
          <ListItem 
            key={item.name}
            disablePadding
            sx={{
              '&:hover': {
                backgroundColor: isActive(item.path) 
                  ? (theme === "dark" ? "#2E7D32" : "#2A7F62") + '20'
                  : (theme === "dark" ? "#2E7D32" : "#2A7F62") + '10',
              },
            }}
          >
            <ListItemButton 
              component={Link}
              href={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: isActive(item.path) 
                  ? (theme === "dark" ? "#4CAF50" : "#2A7F62")
                  : (theme === "dark" ? "#E0E0E0" : "#2D3748"),
                backgroundColor: isActive(item.path) 
                  ? (theme === "dark" ? "#2E7D32" : "#2A7F62") + '20'
                  : 'transparent',
                padding: '12px 24px'
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ 
        backgroundColor: theme === "dark" ? "#424242" : "#E2E8F0"
      }} />
      <Box sx={{ padding: '16px 24px' }}>
        <Button 
          fullWidth
          variant="outlined"
          href="/auth/login"
          sx={{
            mb: 2,
            fontSize: '0.95rem',
            color: theme === "dark" ? "#E0E0E0" : "#2D3748",
            borderColor: theme === "dark" ? "#424242" : "#E2E8F0",
            '&:hover': {
              borderColor: theme === "dark" ? "#E0E0E0" : "#2D3748",
            }
          }}
        >
          Login
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={handleRegisterOpen}
          sx={{
            fontSize: '0.95rem',
            backgroundColor: theme === "dark" ? "#2E7D32" : "#2A7F62",
            "&:hover": {
              backgroundColor: theme === "dark" ? "#1B5E20" : "#1E6D54",
            },
            marginTop: '12px'
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );

  return (
    <MuiThemeProvider theme={muiTheme}>
      <header 
        className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
          theme === "dark" 
            ? "bg-[#121212] border-[#424242]" 
            : "bg-[#FFFFFF] border-[#E2E8F0]"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Mobile menu button and logo */}
          <div className="flex items-center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img 
                src="/images/logo.png" 
                alt="MediPortal Logo"
                className="h-40 w-40 object-contain" 
              />
         
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Theme Toggle */}
            <IconButton 
              onClick={toggleTheme} 
              color="inherit"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </IconButton>

            {/* Notifications */}
            <IconButton 
              color="inherit"
              onClick={handleNotificationOpen}
            >
              <Badge badgeContent={unreadCount} color="error">
                <Bell className="h-5 w-5" />
              </Badge>
            </IconButton>

            {/* User Menu */}
            <div className="hidden sm:block">
              <IconButton
                onClick={handleMenuOpen}
                color="inherit"
              >
                <User className="h-5 w-5" />
              </IconButton>
              <MuiMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    backgroundColor: theme === "dark" ? "#1E1E1E" : "#F5F9F8",
                  }
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>My Appointments</span>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Medical History</span>
                </MenuItem>
                <Divider />
                <MenuItem 
                  onClick={handleMenuClose} 
                  sx={{ color: theme === "dark" ? "#FF5252" : "#D32F2F" }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </MenuItem>
              </MuiMenu>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="hidden sm:flex items-center space-x-4">
              <Button 
                variant="outlined" 
                size="small" 
                href="/auth/login"
                sx={{
                  color: theme === "dark" ? "#E0E0E0" : "#2D3748",
                  borderColor: theme === "dark" ? "#424242" : "#E2E8F0",
                  '&:hover': {
                    borderColor: theme === "dark" ? "#E0E0E0" : "#2D3748",
                  },
                  minWidth: 90,
                  padding: '6px 16px'
                }}
              >
                Login
              </Button>
              
              <Button
                variant="contained"
                size="small"
                onClick={handleRegisterOpen}
                sx={{
                  backgroundColor: theme === "dark" ? "#2E7D32" : "#2A7F62",
                  "&:hover": {
                    backgroundColor: theme === "dark" ? "#1B5E20" : "#1E6D54",
                  },
                  minWidth: 100,
                  padding: '6px 16px',
                  marginLeft: '12px'
                }}
              >
                Register
              </Button>
              
              <MuiMenu
                anchorEl={registerAnchorEl}
                open={Boolean(registerAnchorEl)}
                onClose={handleRegisterClose}
                PaperProps={{
                  sx: {
                    backgroundColor: theme === "dark" ? "#1E1E1E" : "#F5F9F8",
                  }
                }}
              >
                <MenuItem 
                  onClick={handleRegisterClose} 
                  component={Link} 
                  href="/auth/register"
                >
                  <ListItemText primary="Register as Patient" />
                </MenuItem>
                <MenuItem 
                  onClick={handleRegisterClose} 
                  component={Link} 
                  href="/auth/doctor-register"
                >
                  <ListItemText primary="Register as Doctor" />
                </MenuItem>
              </MuiMenu>
            </div>
          </div>

          {/* Notification Menu */}
          <MuiMenu
            anchorEl={notificationAnchorEl}
            open={Boolean(notificationAnchorEl)}
            onClose={handleNotificationClose}
            PaperProps={{
              sx: {
                width: { xs: '90vw', sm: 380 },
                maxHeight: '80vh',
                backgroundColor: theme === "dark" ? "#1E1E1E" : "#F5F9F8",
                p: 0
              }
            }}
          >
            <div className="p-4">
              <h3 className={`text-lg font-semibold ${
                theme === "dark" ? "text-[#E0E0E0]" : "text-[#2D3748]"
              } mb-3`}>
                Recent Notifications
              </h3>
              <List>
                {notifications.map((notification) => (
                  <ListItem 
                    key={notification.id}
                    className={`hover:bg-opacity-10 hover:bg-${
                      theme === "dark" ? "[#4CAF50]" : "[#2A7F62]"
                    } transition-colors`}
                  >
                    <ListItemIcon>
                      <Avatar sx={{ 
                        bgcolor: theme === "dark" ? "#2E7D32" : "#2A7F62",
                        width: 32,
                        height: 32
                      }}>
                        <Bell className="h-4 w-4" />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={notification.title}
                      secondary={
                        <>
                          <span className={`block ${theme === "dark" ? "text-[#B0B0B0]" : "text-[#6B7280]"}`}>
                            {notification.description}
                          </span>
                          <span className={`text-xs ${theme === "dark" ? "text-[#757575]" : "text-[#9CA3AF]"}`}>
                            {notification.time}
                          </span>
                        </>
                      }
                      primaryTypographyProps={{
                        className: theme === "dark" ? "text-[#E0E0E0]" : "text-[#2D3748]",
                        fontWeight: 500
                      }}
                    />
                    {!notification.read && (
                      <div className={`h-2 w-2 rounded-full ${
                        theme === "dark" ? "bg-[#FF5252]" : "bg-[#D32F2F]"
                      }`} />
                    )}
                  </ListItem>
                ))}
              </List>
              <div className={`mt-4 pt-3 border-t ${
                theme === "dark" ? "border-[#424242]" : "border-[#E2E8F0]"
              }`}>
                <Button 
                  fullWidth
                  sx={{
                    color: theme === "dark" ? "#4CAF50" : "#2A7F62",
                    fontWeight: 500
                  }}
                >
                  View all notifications
                </Button>
              </div>
            </div>
          </MuiMenu>
        </div>

        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 250,
              backgroundColor: theme === "dark" ? "#1E1E1E" : "#F5F9F8"
            },
          }}
        >
          {drawer}
        </Drawer>
      </header>
    </MuiThemeProvider>
  );
}