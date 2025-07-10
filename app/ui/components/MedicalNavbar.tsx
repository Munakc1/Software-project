"use client";
import React from 'react';
import { Notifications, AccountCircle, Settings, HelpOutline, ExitToApp, Person, ArrowDropDown } from '@mui/icons-material';
import { Badge, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Avatar, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const MedicalNavbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState<null | HTMLElement>(null);
  const [registerAnchorEl, setRegisterAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget);
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

  const handleLogout = () => {
    console.log('User logged out');
    router.push('/auth/login');
    handleMenuClose();
  };

  const navItems = [
    { name: 'Medical Records', path: '/medical-records' },
    { name: 'Vaccination', path: '/vaccination' },
    { name: 'Prescriptions & Lab Reports', path: '/prescriptions' },
    { name: 'Appointments', path: '/appointments' },
  ];

  const accountMenuItems = [
    { name: 'My Profile', icon: <Person fontSize="small" />, path: '/profile' },
    { name: 'Settings', icon: <Settings fontSize="small" />, path: '/settings' },
    { name: 'Help & Support', icon: <HelpOutline fontSize="small" />, path: '/support' },
    { name: 'Logout', icon: <ExitToApp fontSize="small" />, action: handleLogout },
  ];

  const notifications = [
    {
      id: 1,
      title: 'Polio vaccine reminder',
      description: 'Due on Aug 10',
      icon: (
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      id: 2,
      title: 'Upcoming Appointment',
      description: 'Tomorrow at 10:00 AM',
      icon: (
        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )
    },
    {
      id: 3,
      title: 'Lab Results Available',
      description: 'CBC report ready for review',
      icon: (
        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
          <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Left side - Logo and navigation */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center -mr-5 -ml-24">
              <Image 
                src="/images/logo.png"
                alt="Patient Care Portal"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Middle - Navigation items (hidden on mobile) */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className="text-gray-700 hover:text-indigo-600 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - Icons and buttons */}
          <div className="flex items-center gap-6 ml-auto">
            {/* Login and Register buttons (visible when not logged in) */}
            <div className="hidden md:flex items-center gap-4 ml-auto">
              <Link href="/auth/login" passHref>
                <Button 
                  variant="text" 
                  className="text-gray-700 hover:text-indigo-600 font-medium normal-case text-sm px-3 py-1"
                  size="small"
                >
                  Login
                </Button>
              </Link>
              
              <Button
                variant="outlined"
                endIcon={<ArrowDropDown />}
                onClick={handleRegisterOpen}
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium normal-case text-sm px-3 py-1"
                size="small"
              >
                Register
              </Button>
              
              <Menu
                anchorEl={registerAnchorEl}
                open={Boolean(registerAnchorEl)}
                onClose={handleRegisterClose}
                PaperProps={{
                  style: {
                    width: '200px',
                  },
                }}
              >
                <MenuItem onClick={handleRegisterClose} component={Link} href="/auth/register">
                  <ListItemText primary="Register as Patient" className="text-gray-800" />
                </MenuItem>
                <MenuItem onClick={handleRegisterClose} component={Link} href="/auth/doctor-register">
                  <ListItemText primary="Register as Doctor" className="text-gray-800" />
                </MenuItem>
              </Menu>
            </div>

            {/* Notification and Account icons */}
            <div className="flex items-center gap-4">
              <IconButton 
                aria-label="notifications" 
                color="inherit" 
                className="text-gray-600 hover:bg-gray-100"
                onClick={handleNotificationOpen}
                size="medium"
              >
                <Badge badgeContent={notifications.length} color="error">
                  <Notifications fontSize="medium" />
                </Badge>
              </IconButton>
              
              <IconButton
                edge="end"
                aria-label="account"
                aria-controls="account-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
                className="text-gray-600 hover:bg-gray-100"
                size="medium"
              >
                <AccountCircle fontSize="medium" />
              </IconButton>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
              onClick={handleDrawerToggle}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Notification Menu */}
          <Menu
            id="notification-menu"
            anchorEl={notificationAnchorEl}
            keepMounted
            open={Boolean(notificationAnchorEl)}
            onClose={handleNotificationClose}
            PaperProps={{
              style: {
                width: '350px',
                padding: '0',
              },
            }}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Notifications</h3>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start">
                    {notification.icon}
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                      <p className="text-sm text-gray-500">{notification.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <button className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all notifications
                </button>
              </div>
            </div>
          </Menu>
          
          {/* Account Menu */}
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {accountMenuItems.map((item) => (
              item.path ? (
                <Link href={item.path} key={item.name} passHref legacyBehavior>
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 500 }} />
                  </MenuItem>
                </Link>
              ) : (
                <MenuItem onClick={item.action} key={item.name}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 500 }} />
                  </MenuItem>
                )
              ))}
            </Menu>
          </div>
        </div>

        {/* Mobile drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div className="w-64">
            <div className="flex items-center justify-between p-4 border-b">
              <Image 
                src="/images/logo.png" 
                alt="Patient Care Portal"
                width={160}
                height={35}
                className="h-9 w-auto"
              />
              <button 
                onClick={handleDrawerToggle} 
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <List>
              {navItems.map((item) => (
                <Link href={item.path} key={item.name} passHref legacyBehavior>
                  <ListItem 
                    component="a"
                    onClick={handleDrawerToggle}
                    className="hover:bg-gray-100 px-4 py-3"
                  >
                    <ListItemText 
                      primary={item.name} 
                      primaryTypographyProps={{
                        className: "text-gray-800 font-medium"
                      }}
                    />
                  </ListItem>
                </Link>
              ))}
              
              {/* Mobile Login/Register section */}
              <div className="border-t mt-2 px-4 py-3">
                <Link href="/auth/login" passHref legacyBehavior>
                  <ListItem 
                    component="a"
                    onClick={handleDrawerToggle}
                    className="hover:bg-gray-100 px-0 py-2"
                  >
                    <ListItemText 
                      primary="Login" 
                      primaryTypographyProps={{
                        className: "text-gray-800 font-medium"
                      }}
                    />
                  </ListItem>
                </Link>
                
                <Link href="/auth/register" passHref legacyBehavior>
                  <ListItem
                    component="a"
                    onClick={handleDrawerToggle}
                    className="hover:bg-gray-100 px-0 py-2"
                  >
                    <ListItemText
                      primary="Register as Patient"
                      primaryTypographyProps={{
                        className: "text-gray-800 font-medium"
                      }}
                    />
                  </ListItem>
                </Link>

                <Link href="/auth/doctor-register" passHref legacyBehavior>
                  <ListItem
                    component="a"
                    onClick={handleDrawerToggle}
                    className="hover:bg-gray-100 px-0 py-2"
                  >
                    <ListItemText
                      primary="Register as Doctor"
                      primaryTypographyProps={{
                        className: "text-gray-800 font-medium"
                      }}
                    />
                  </ListItem>
                </Link>
              </div>
              
              {/* Account menu items (visible when logged in) */}
              <div className="border-t mt-2">
                {accountMenuItems.map((item) => (
                  <Link href={item.path || '#'} key={item.name} passHref legacyBehavior>
                    <ListItem 
                      component="a"
                      onClick={item.action ? item.action : handleDrawerToggle}
                      className="hover:bg-gray-100 px-4 py-3"
                    >
                      <ListItemIcon className="min-w-0 mr-3 text-gray-600">
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={item.name} 
                        primaryTypographyProps={{
                          className: "text-gray-800 font-medium"
                        }}
                      />
                    </ListItem>
                  </Link>
                ))}
              </div>
            </List>
          </div>
        </Drawer>
      </header>
    );
  };

  export default MedicalNavbar;