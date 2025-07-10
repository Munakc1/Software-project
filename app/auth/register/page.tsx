"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  TextField, 
  Button, 
  Typography, 
  Link, 
  Paper,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Snackbar,
  Alert,
  Divider,
  Box
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Footer from '../../ui/components/Footer';

export default function PatientRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    citizenshipNumber: '',
    citizenshipIssuedDistrict: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'info' | 'success' | 'warning' | 'error'
  });
  const router = useRouter();

  const nepaliDistricts = [
    'Achham', 'Arghakhanchi', 'Baglung', 'Baitadi', 'Bajhang', 'Bajura', 
    'Banke', 'Bara', 'Bardiya', 'Bhaktapur', 'Bhojpur', 'Chitwan',
    'Dadeldhura', 'Dailekh', 'Dang', 'Darchula', 'Dhading', 'Dhankuta',
    'Dhanusa', 'Dolakha', 'Dolpa', 'Doti', 'Gorkha', 'Gulmi', 'Humla',
    'Ilam', 'Jajarkot', 'Jhapa', 'Jumla', 'Kailali', 'Kalikot', 'Kanchanpur',
    'Kapilvastu', 'Kaski', 'Kathmandu', 'Kavrepalanchok', 'Khotang', 'Lalitpur',
    'Lamjung', 'Mahottari', 'Makwanpur', 'Manang', 'Morang', 'Mugu', 'Mustang',
    'Myagdi', 'Nawalparasi', 'Nuwakot', 'Okhaldhunga', 'Palpa', 'Panchthar',
    'Parbat', 'Parsa', 'Pyuthan', 'Ramechhap', 'Rasuwa', 'Rautahat', 'Rolpa',
    'Rukum', 'Rupandehi', 'Salyan', 'Sankhuwasabha', 'Saptari', 'Sarlahi',
    'Sindhuli', 'Sindhupalchok', 'Siraha', 'Solukhumbu', 'Sunsari', 'Surkhet',
    'Syangja', 'Tanahu', 'Taplejung', 'Terhathum', 'Udayapur'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.citizenshipNumber) newErrors.citizenshipNumber = 'Citizenship number is required';
    if (!formData.citizenshipIssuedDistrict) newErrors.citizenshipIssuedDistrict = 'Issued district is required';
    if (!termsAccepted) newErrors.terms = 'You must accept the terms and conditions';
    
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      setSnackbar({
        open: true,
        message: 'Patient registration successful!',
        severity: 'success'
      });
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="flex-grow flex items-center justify-center p-4">
        <Paper 
          elevation={3} 
          className="w-full max-w-2xl p-8 rounded-2xl shadow-xl"
          sx={{
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex flex-col items-center mb-8">
            <Typography 
              variant="h4" 
              className="font-bold text-gray-800 mb-2 text-center"
              sx={{
                background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700
              }}
            >
              Patient Registration
            </Typography>
            <Typography variant="subtitle2" className="text-gray-500 mt-4 text-center">
              Please fill in your details to create an account
            </Typography>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                fullWidth
                name="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
                }}
              />

              <TextField
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
                }}
              />

              <TextField
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' },
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
              />

              <TextField
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
                }}
              />

              <TextField
                fullWidth
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
                }}
              />

              <TextField
                fullWidth
                name="dob"
                label="Date of Birth"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dob}
                onChange={handleChange}
                error={!!errors.dob}
                helperText={errors.dob}
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
                }}
              />

              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleSelectChange}
                  label="Gender"
                  sx={{ 
                    borderRadius: '12px', 
                    backgroundColor: 'rgba(243, 244, 246, 0.5)',
                    '& .MuiSelect-select': {
                      padding: '16.5px 14px'
                    }
                  }}
                >
                  <MenuItem value=""><em>Select gender</em></MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                  <MenuItem value="prefer-not-to-say">Prefer not to say</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                name="citizenshipNumber"
                label="Citizenship Number"
                value={formData.citizenshipNumber}
                onChange={handleChange}
                error={!!errors.citizenshipNumber}
                helperText={errors.citizenshipNumber}
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
                }}
              />

              <FormControl fullWidth margin="normal" error={!!errors.citizenshipIssuedDistrict}>
                <InputLabel>Citizenship Issued District</InputLabel>
                <Select
                  name="citizenshipIssuedDistrict"
                  value={formData.citizenshipIssuedDistrict}
                  onChange={handleSelectChange}
                  label="Citizenship Issued District"
                  sx={{ 
                    borderRadius: '12px', 
                    backgroundColor: 'rgba(243, 244, 246, 0.5)',
                    '& .MuiSelect-select': {
                      padding: '16.5px 14px'
                    }
                  }}
                >
                  <MenuItem value=""><em>Select district</em></MenuItem>
                  {nepaliDistricts.map(district => (
                    <MenuItem key={district} value={district}>{district}</MenuItem>
                  ))}
                </Select>
                {errors.citizenshipIssuedDistrict && (
                  <FormHelperText>{errors.citizenshipIssuedDistrict}</FormHelperText>
                )}
              </FormControl>
            </div>

            <TextField
              fullWidth
              name="address"
              label="Full Address"
              multiline
              rows={3}
              value={formData.address}
              onChange={handleChange}
              margin="normal"
              InputProps={{
                sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
              }}
            />

            <FormControlLabel
              control={
                <Checkbox 
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  color="primary"
                  size="small"
                />
              }
              label={
                <Typography variant="body2" className="text-gray-600">
                  I agree to the{' '}
                  <Link href="/terms" color="primary" underline="hover">Terms and Conditions</Link> and{' '}
                  <Link href="/privacy" color="primary" underline="hover">Privacy Policy</Link>
                </Typography>
              }
            />
            {errors.terms && <Typography color="error" variant="body2">{errors.terms}</Typography>}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="py-3"
              sx={{
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '1rem',
                textTransform: 'none',
                background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #2563eb, #4f46e5)'
                }
              }}
            >
              Register as Patient
            </Button>

            <Typography variant="body2" className="text-center mt-4 text-gray-600">
              Already have an account?{' '}
              <Link 
                href="/auth/login" 
                color="primary" 
                fontWeight="medium"
                underline="hover"
              >
                Login here
              </Link>
            </Typography>
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