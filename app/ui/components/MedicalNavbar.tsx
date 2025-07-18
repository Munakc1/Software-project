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
    handleDrawerToggle();
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
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Left side - Logo and navigation */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png"
                alt="Patient Care Portal"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Middle - Navigation items (hidden on mobile) */}
            <nav className="hidden md:flex space-x-8 ml-10">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - Icons and buttons */}
          <div className="flex items-center gap-4">
            {/* Login and Register buttons (visible when not logged in) */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/auth/login" passHref>
                <Button 
                  variant="text" 
                  className="text-black hover:bg-gray-100 font-medium normal-case text-sm px-4 py-2 rounded-md"
                  size="medium"
                >
                  Login
                </Button>
              </Link>
              
              <Button
                variant="outlined"
                endIcon={<ArrowDropDown />}
                onClick={handleRegisterOpen}
                className="border-gray-300 text-black hover:bg-gray-50 font-medium normal-case text-sm px-4 py-2 rounded-md"
                size="medium"
              >
                Register
              </Button>
              
              <Menu
                anchorEl={registerAnchorEl}
                open={Boolean(registerAnchorEl)}
                onClose={handleRegisterClose}
                PaperProps={{
                  style: {
                    width: '220px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <MenuItem 
                  onClick={handleRegisterClose} 
                  component={Link} 
                  href="/auth/register"
                  className="hover:bg-gray-50"
                >
                  <ListItemText primary="Register as Patient" className="text-gray-800" />
                </MenuItem>
                <MenuItem 
                  onClick={handleRegisterClose} 
                  component={Link} 
                  href="/auth/doctor-register"
                  className="hover:bg-gray-50"
                >
                  <ListItemText primary="Register as Doctor" className="text-gray-800" />
                </MenuItem>
              </Menu>
            </div>

            {/* Notification and Account icons */}
            <div className="flex items-center gap-2">
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
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
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
                width: '380px',
                padding: '0',
                maxHeight: '80vh',
                overflow: 'auto',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              },
            }}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Notifications</h3>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    {notification.icon}
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                      <p className="text-sm text-gray-500">{notification.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <button className="w-full text-center text-sm font-medium text-gray-700 hover:text-gray-900">
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
                filter: 'drop-shadow(0px 2px 12px rgba(0,0,0,0.12))',
                mt: 1.5,
                borderRadius: '8px',
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
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-medium text-gray-900">Signed in as</p>
              <p className="text-sm text-gray-500 truncate">user@example.com</p>
            </div>
            {accountMenuItems.map((item) => (
              item.path ? (
                <MenuItem 
                  key={item.name} 
                  onClick={() => {
                    handleMenuClose();
                    router.push(item.path);
                  }}
                  className="py-2 px-4 hover:bg-gray-50"
                >
                  <ListItemIcon className="min-w-[40px] text-gray-600">{item.icon}</ListItemIcon>
                  <ListItemText 
                    primary={item.name} 
                    primaryTypographyProps={{ 
                      fontSize: '0.875rem',
                      fontWeight: 500 
                    }} 
                  />
                </MenuItem>
              ) : (
                <MenuItem 
                  onClick={item.action} 
                  key={item.name}
                  className="py-2 px-4 hover:bg-gray-50"
                >
                  <ListItemIcon className="min-w-[40px] text-gray-600">{item.icon}</ListItemIcon>
                  <ListItemText 
                    primary={item.name} 
                    primaryTypographyProps={{ 
                      fontSize: '0.875rem',
                      fontWeight: 500 
                    }} 
                  />
                </MenuItem>
              )
            ))}
          </Menu>
        </div>

        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              width: 300,
              boxSizing: 'border-box',
            },
          }}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
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
            
            <div className="flex-grow overflow-y-auto">
              <List>
                {navItems.map((item) => (
                  <ListItem 
                    key={item.name}
                    component="button"
                    onClick={() => {
                      router.push(item.path);
                      handleDrawerToggle();
                    }}
                    className="hover:bg-gray-50 px-4 py-3 transition-colors"
                  >
                    <ListItemText 
                      primary={item.name} 
                      primaryTypographyProps={{
                        className: "text-gray-800 font-medium text-sm"
                      }}
                    />
                  </ListItem>
                ))}
              </List>
              
              {/* Mobile Login/Register section */}
              <div className="border-t border-gray-200 px-4 py-3">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Account</h3>
                <List>
                  <ListItem 
                    component="button"
                    onClick={() => {
                      router.push('/auth/login');
                      handleDrawerToggle();
                    }}
                    className="hover:bg-gray-50 px-0 py-2 transition-colors"
                  >
                    <ListItemText 
                      primary="Login" 
                      primaryTypographyProps={{
                        className: "text-gray-800 font-medium text-sm"
                      }}
                    />
                  </ListItem>
                  
                  <ListItem
                    component="button"
                    onClick={() => {
                      router.push('/auth/register');
                      handleDrawerToggle();
                    }}
                    className="hover:bg-gray-50 px-0 py-2 transition-colors"
                  >
                    <ListItemText
                      primary="Register as Patient"
                      primaryTypographyProps={{
                        className: "text-gray-800 font-medium text-sm"
                      }}
                    />
                  </ListItem>

                  <ListItem
                    component="button"
                    onClick={() => {
                      router.push('/auth/doctor-register');
                      handleDrawerToggle();
                    }}
                    className="hover:bg-gray-50 px-0 py-2 transition-colors"
                  >
                    <ListItemText
                      primary="Register as Doctor"
                      primaryTypographyProps={{
                        className: "text-gray-800 font-medium text-sm"
                      }}
                    />
                  </ListItem>
                </List>
              </div>
              
              {/* Account menu items (visible when logged in) */}
              <div className="border-t border-gray-200 px-4 py-3">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">My Account</h3>
                <List>
                  {accountMenuItems.map((item) => (
                    <ListItem 
                      key={item.name}
                      component="button"
                      onClick={() => {
                        if (item.action) {
                          item.action();
                        } else if (item.path) {
                          router.push(item.path);
                        }
                        handleDrawerToggle();
                      }}
                      className="hover:bg-gray-50 px-0 py-2 transition-colors"
                    >
                      <ListItemIcon className="min-w-0 mr-3 text-gray-600">
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={item.name} 
                        primaryTypographyProps={{
                          className: "text-gray-800 font-medium text-sm"
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default MedicalNavbar;