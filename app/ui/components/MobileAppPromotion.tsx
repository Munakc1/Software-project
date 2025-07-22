"use client";
import { useState } from "react";
import { 
  Send,
  Smartphone,
  Download,
  MedicalInformation,
  MedicalServices,
  LocalHospital,
  Medication,
  Description,
  CheckCircle,
  Error,
  Notifications
} from "@mui/icons-material";
import { 
  Button, 
  TextField, 
  Box, 
  Typography, 
  Snackbar, 
  Alert,
  Avatar,
  Paper,
  Container,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

// Medical-optimized theme with improved color palette
const medicalTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2A7F62', // Cadmium Green - Primary buttons and important actions
    },
    secondary: {
      main: '#3A5E6D', // Teal Blue - Navigation and secondary elements
    },
    error: {
      main: '#D32F2F', // Alert Red - Critical warnings and errors
    },
    success: {
      main: '#388E3C', // Clinic Green - Success messages and positive actions
    },
    background: {
      default: '#FFFFFF', // White - Main background (sterile feel)
      paper: '#F5F9F8', // Ice Gray - Cards and tiles (reduces eye strain)
    },
    text: {
      primary: '#2D3748', // Charcoal - Body text and headings (optimal readability)
      secondary: '#5A677D',
    },
    divider: '#E2E8F0', // Cloud Gray - Borders and dividers (softer than pure gray)
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
        },
        contained: {
          boxShadow: '0 4px 12px rgba(42, 127, 98, 0.2)',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(42, 127, 98, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 24px rgba(58, 94, 109, 0.08)',
          backgroundColor: '#F5F9F8', // Ice Gray for cards
        },
      },
    },
  },
});

// Dark mode overrides with medical-appropriate colors
const darkTheme = createTheme(medicalTheme, {
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#B0B0B0',
      disabled: '#9E9E9E', 
    },
    divider: '#424242',
    primary: {
      main: '#4CAF50', // Brighter green for better visibility in dark mode
    },
    secondary: {
      main: '#81C784', // Softer teal for dark mode
    },
  },
});

const DownloadSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error"
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  const handleSendSMS = () => {
    setIsSubmitting(true);
    
    if (!phoneNumber) {
      setSnackbar({
        open: true,
        message: "Please enter a phone number",
        severity: "error"
      });
      setIsSubmitting(false);
      return;
    }
    
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phoneNumber.replace(/\s+/g, ''))) {
      setSnackbar({
        open: true,
        message: "Please enter a valid phone number",
        severity: "error"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSnackbar({
        open: true,
        message: "Download link sent to your phone!",
        severity: "success"
      });
      setPhoneNumber("");
      setIsSubmitting(false);
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : medicalTheme}>
      <Box 
        component="section" 
        sx={{
          py: { xs: 8, md: 12 },
          background: isDarkMode 
            ? 'linear-gradient(135deg, #121212 0%, #1E3A4D 100%)'
            : 'linear-gradient(135deg, #FFFFFF 0%, #F5F9F8 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{ width: '100%' }}
            iconMapping={{
              success: <CheckCircle fontSize="inherit" />,
              error: <Error fontSize="inherit" />,
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>

        {/* Decorative elements */}
        <motion.div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            backgroundImage: isDarkMode 
              ? 'radial-gradient(#3A5E6D 1px, transparent 1px)'
              : 'radial-gradient(#2A7F62 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box 
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            sx={{
              display: 'grid',
              gap: { xs: 4, md: 6 },
              gridTemplateColumns: { lg: '1fr 1fr' },
              alignItems: 'center'
            }}
          >
            {/* Left - Phone Mockup */}
            <Box 
              component={motion.div}
              variants={itemVariants}
              sx={{
                order: { xs: 2, lg: 1 },
                mt: { xs: 4, lg: 0 },
                display: 'flex',
                justifyContent: { xs: 'center', lg: 'flex-start' }
              }}
            >
              <motion.div
                style={{ position: 'relative' }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Phone Frame */}
                <Box 
                  sx={{
                    width: { xs: 280, md: 320 },
                    height: { xs: 500, md: 600 },
                    background: isDarkMode 
                      ? 'linear-gradient(135deg, #3A5E6D 0%, #2A7F62 100%)'
                      : 'linear-gradient(135deg, #3A5E6D 0%, #2A7F62 100%)',
                    borderRadius: '3rem',
                    p: 1,
                    boxShadow: 6
                  }}
                >
                  <Box sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: '2.5rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {/* Status Bar */}
                    <Box sx={{
                      bgcolor: 'primary.main',
                      height: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: 3,
                      color: 'common.white',
                      fontSize: 12
                    }}>
                      <span>9:41</span>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8H4V14H2V8ZM6 5H8V14H6V5ZM10 2H12V14H10V2Z" fill="currentColor"/>
                        </svg>
                        <span>100%</span>
                      </Box>
                    </Box>
                    
                    {/* App Header */}
                    <Box sx={{ 
                      bgcolor: 'primary.main', 
                      p: 2, 
                      color: 'common.white' 
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar sx={{ 
                          width: 32, 
                          height: 32, 
                          bgcolor: 'rgba(255,255,255,0.2)',
                          '& .MuiSvgIcon-root': { fontSize: 16 }
                        }}>
                          <MedicalInformation />
                        </Avatar>
                        <Typography variant="h6" fontWeight="bold">MediPal</Typography>
                      </Box>
                    </Box>
                    
                    {/* App Content */}
                    <Box sx={{ 
                      p: 2, 
                      gap: 2, 
                      flex: 1, 
                      display: 'flex', 
                      flexDirection: 'column'
                    }}>
                      {/* Doctor Card */}
                      <motion.div 
                        whileHover={{ y: -2 }}
                        style={{ width: '100%' }}
                      >
                        <Paper sx={{ p: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar sx={{ 
                              width: 48, 
                              height: 48, 
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText'
                            }}>
                              <MedicalServices />
                            </Avatar>
                            <Box>
                              <Typography variant="subtitle1" fontWeight="bold">
                                Dr. Sarah Johnson
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Cardiologist
                              </Typography>
                            </Box>
                          </Box>
                          <Box sx={{ 
                            mt: 1, 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between'
                          }}>
                            <Typography variant="body2" color="text.secondary">
                              Next Appointment
                            </Typography>
                            <Typography variant="body2" color="primary.main" fontWeight="medium">
                              Today 2:30 PM
                            </Typography>
                          </Box>
                        </Paper>
                      </motion.div>
                      
                      {/* Quick Actions */}
                      <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: 1 
                      }}>
                        {[
                          { icon: <Description color="primary" />, label: 'Records' },
                          { icon: <Medication color="primary" />, label: 'Prescriptions' }
                        ].map((item, index) => (
                          <motion.div
                            key={item.label}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Paper sx={{ p: 1.5, textAlign: 'center' }}>
                              <Avatar 
                                sx={{ 
                                  width: 32, 
                                  height: 32, 
                                  bgcolor: 'primary.light',
                                  mx: 'auto',
                                  mb: 1,
                                  color: 'primary.contrastText'
                                }}
                              >
                                {item.icon}
                              </Avatar>
                              <Typography variant="body2" fontWeight="medium">
                                {item.label}
                              </Typography>
                            </Paper>
                          </motion.div>
                        ))}
                      </Box>
                      
                      {/* Recent Activity */}
                      <Box sx={{ mt: 'auto', gap: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle2" fontWeight="bold">Recent Activity</Typography>
                        <Box sx={{ gap: 1, display: 'flex', flexDirection: 'column' }}>
                          {[
                            { text: 'Lab results received', color: 'success.main' },
                            { text: 'Appointment confirmed', color: 'primary.main' }
                          ].map((activity, index) => (
                            <motion.div
                              key={activity.text}
                              style={{ display: 'flex', alignItems: 'center', gap: 1 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              <Box sx={{ 
                                width: 8, 
                                height: 8, 
                                borderRadius: '50%',
                                bgcolor: activity.color
                              }} />
                              <Typography variant="body2" color="text.secondary">
                                {activity.text}
                              </Typography>
                            </motion.div>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                
                {/* Floating notification */}
                <motion.div
                  style={{ 
                    position: 'absolute',
                    bottom: -16,
                    right: -16,
                    width: 160
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  <Paper sx={{ p: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Notifications color="primary" fontSize="small" />
                      <Box>
                        <Typography variant="body2" fontWeight="medium">New message!</Typography>
                        <Typography variant="caption" color="text.secondary">Dr. Johnson sent...</Typography>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </motion.div>
            </Box>
            
            {/* Right - Download Content */}
            <Box 
              component={motion.div}
              variants={itemVariants}
              sx={{ order: { xs: 1, lg: 2 } }}
            >
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1.2,
                    background: isDarkMode
                      ? 'linear-gradient(45deg, #4CAF50, #81C784)' // Brighter greens for dark mode
                      : 'linear-gradient(45deg, #2A7F62, #3A5E6D)', // Original medical palette
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Download the MediPal app
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ 
                    mb: { xs: 3, md: 4 },
                    fontSize: { xs: '1rem', md: '1.125rem' }
                  }}
                >
                  Access your medical history with India's top doctors on the MediPal app. 
                  Connect with doctors online, available 24/7, from the comfort of your home.
                </Typography>
              </motion.div>
              
              {/* Phone Input */}
              <motion.div variants={itemVariants} style={{ marginBottom: isMobile ? 24 : 32 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                  Get the link to download the app
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' }, 
                  gap: 1,
                  maxWidth: 'md'
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    bgcolor: 'action.hover',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    px: 2,
                    height: 56,
                    minWidth: 80
                  }}>
                    <Typography variant="body1" color="text.secondary">+91</Typography>
                  </Box>
                  <TextField
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: 56,
                        '& fieldset': {
                          borderRadius: 1,
                        }
                      }
                    }}
                  />
                  <Button 
                    onClick={handleSendSMS} 
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    startIcon={<Send />}
                    sx={{
                      height: 56,
                      borderRadius: 1,
                      px: 4,
                      whiteSpace: 'nowrap',
                      minWidth: { sm: 140 },
                      backgroundColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.dark'
                      }
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send SMS'}
                  </Button>
                </Box>
              </motion.div>
              
              {/* Download Buttons */}
              <motion.div 
                variants={itemVariants}
                style={{ 
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: 12
                }}
              >
                {[
                  { 
                    label: "Google Play", 
                    subtext: "GET IT ON",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM11 7h2v10h-2V7zm-4 2h2v6H7V9zm8 2h2v4h-2v-4z"/>
                      </svg>
                    ),
                    color: '#4285F4'
                  },
                  { 
                    label: "App Store", 
                    subtext: "Download on the",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2a8 8 0 0 1 8 8v4a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8v-4a8 8 0 0 1 8-8h4zm0 2h-4a6 6 0 0 0-6 6v4a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6v-4a6 6 0 0 0-6-6zm-1 2h2v6h-2V6zm-4 2h2v4H9V8zm4 2h2v2h-2v-2z"/>
                      </svg>
                    ),
                    color: isDarkMode ? '#ffffff' : '#000000'
                  }
                ].map((store, index) => (
                  <motion.div
                    key={store.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{ flex: isMobile ? 1 : 'none' }}
                  >
                    <Button 
                      variant="outlined" 
                      size="large"
                      sx={{
                        height: 64,
                        borderRadius: 2,
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        px: 3,
                        py: 2,
                        width: isMobile ? '100%' : 'auto',
                        textTransform: 'none',
                        '&:hover': {
                          borderColor: 'primary.main',
                          bgcolor: isDarkMode ? 'action.hover' : 'action.selected'
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar 
                          sx={{ 
                            width: 32, 
                            height: 32, 
                            bgcolor: store.color,
                            color: isDarkMode ? 'text.primary' : 'common.white',
                            fontSize: 16
                          }}
                        >
                          {store.icon}
                        </Avatar>
                        <Box sx={{ textAlign: 'left' }}>
                          <Typography variant="caption" color="text.secondary">
                            {store.subtext}
                          </Typography>
                          <Typography variant="body1" fontWeight="bold">
                            {store.label}
                          </Typography>
                        </Box>
                      </Box>
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default DownloadSection;