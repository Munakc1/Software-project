"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  TextField, 
  Button, 
  Checkbox, 
  Typography, 
  Link, 
  Paper,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
  Snackbar
} from '@mui/material';
import { Visibility, VisibilityOff, Login as LoginIcon } from '@mui/icons-material';
import Footer from '../../ui/components/Footer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [useOTP, setUseOTP] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info' as 'info' | 'success' | 'warning' | 'error'
  });
  const router = useRouter();

  // Load saved credentials if "remember me" was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!useOTP && !password) {
      newErrors.password = 'Password is required';
    } else if (!useOTP && password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) return;

    setIsLoading(true);

    try {
      if (useOTP) {
        // Simulate OTP API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSnackbar({
          open: true,
          message: `OTP sent to ${email}`,
          severity: 'success'
        });
      } else {
        // Simulate login API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Demo credentials check
        if (email === 'user@example.com' && password === 'password') {
          if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
          } else {
            localStorage.removeItem('rememberedEmail');
          }
          router.push('/dashboard');
        } else {
          setSnackbar({
            open: true,
            message: 'Invalid credentials. Use user@example.com / password for demo.',
            severity: 'error'
          });
        }
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'An error occurred. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex-grow flex items-center justify-center p-4">
        <Paper 
          elevation={3} 
          className="w-full max-w-md p-8 rounded-2xl shadow-xl"
          sx={{
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <LoginIcon sx={{ color: 'white' }} />
              </div>
              <Typography 
                variant="h4" 
                className="font-bold text-gray-800 text-center"
                sx={{
                  background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700
                }}
              >
                Medipal
              </Typography>
            </div>
            <Typography 
              variant="subtitle2" 
              className="text-gray-500 text-center"
            >
              Access your medical records and appointments
            </Typography>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <Typography variant="body2" className="font-medium mb-1 text-gray-700">
                Email Address
              </Typography>
              <TextField
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  sx: {
                    borderRadius: '12px',
                    backgroundColor: 'rgba(243, 244, 246, 0.5)'
                  }
                }}
                type="email"
                autoComplete="email"
              />
            </div>

            {/* Password - Only shown when not using OTP */}
            {!useOTP && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <Typography variant="body2" className="font-medium text-gray-700">
                    Password
                  </Typography>
                  <Link 
                    href="#" 
                    variant="body2" 
                    color="primary"
                    sx={{ fontSize: '0.75rem' }}
                  >
                    Forgot password?
                  </Link>
                </div>
                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    sx: {
                      borderRadius: '12px',
                      backgroundColor: 'rgba(243, 244, 246, 0.5)'
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          size="small"
                        >
                          {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  autoComplete="current-password"
                />
              </div>
            )}

            {/* Options - Only shown when using password */}
            {!useOTP && (
              <div className="flex items-center">
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      size="small"
                    />
                  }
                  label={
                    <Typography variant="body2" className="text-gray-600">
                      Remember me
                    </Typography>
                  }
                />
              </div>
            )}

            {/* OTP Toggle */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={useOTP}
                  onChange={(e) => setUseOTP(e.target.checked)}
                  size="small"
                />
              }
              label={
                <Typography variant="body2" className="text-gray-600">
                  Login with OTP instead
                </Typography>
              }
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="py-3"
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
              sx={{
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '1rem',
                textTransform: 'none',
                background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #2563eb, #4f46e5)'
                },
                '&.Mui-disabled': {
                  background: 'rgba(0, 0, 0, 0.12)'
                }
              }}
            >
              {isLoading ? (useOTP ? 'Sending OTP...' : 'Logging in...') : (useOTP ? 'Send OTP' : 'Login')}
            </Button>

            <div className="text-center mt-4 space-y-2">
              <Typography variant="body2" className="text-gray-600">
                Don't have an account?{' '}
                <Link 
                  href="/auth/register" 
                  color="primary" 
                  fontWeight="medium"
                  underline="hover"
                >
                  Register as Patient
                </Link>
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Healthcare provider?{' '}
                <Link 
                  href="/auth/doctor-register" 
                  color="primary" 
                  fontWeight="medium"
                  underline="hover"
                >
                  Doctor Portal
                </Link>
              </Typography>
            </div>
          </form>
        </Paper>
      </div>
      
      <Footer />

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
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}