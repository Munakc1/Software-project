"use client";
import { useState, useEffect } from 'react';
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
  InputLabel,
  FormControl,
  Autocomplete,
  Chip,
  Divider,
  Box,
  FormHelperText,
  Alert,
  CircularProgress,
  Snackbar
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { countries } from 'countries-list';


export default function DoctorRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    licenseNumber: '',
    specialization: [] as string[],
    yearsOfExperience: '',
    hospital: '',
    address: '',
    citizenship: '',
    qualifications: '',
    citizenshipNumber: '',
    citizenshipIssuedDistrict: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info' as 'info' | 'success' | 'warning' | 'error'
  });
  const router = useRouter();

  // Country and district data
  const countryList = Object.entries(countries).map(([code, country]) => ({
    code,
    name: country.name
  }));

  const nepaliDistricts = [
    'Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur', 'Biratnagar', 'Birgunj',
    'Dharan', 'Bharatpur', 'Janakpur', 'Butwal', 'Hetauda', 'Dhangadhi',
    'Nepalgunj', 'Itahari', 'Tulsipur', 'Birendranagar', 'Ghorahi', 'Kalaiya'
  ];

  const specializations = [
    'Cardiology', 'Dermatology', 'Endocrinology', 'Family Medicine',
    'Gastroenterology', 'General Surgery', 'Internal Medicine', 'Neurology',
    'Obstetrics/Gynecology', 'Oncology', 'Ophthalmology', 'Orthopedics',
    'Otolaryngology', 'Pediatrics', 'Psychiatry', 'Pulmonology',
    'Radiology', 'Urology'
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
    if (!formData.licenseNumber.trim()) newErrors.licenseNumber = 'License number is required';
    if (formData.specialization.length === 0) newErrors.specialization = 'At least one specialization is required';
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

  const handleSpecializationChange = (event: any, newValue: string[]) => {
    setFormData(prev => ({ ...prev, specialization: newValue }));
    if (errors.specialization) setErrors(prev => ({ ...prev, specialization: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSnackbar({
        open: true,
        message: 'Doctor registration submitted for verification!',
        severity: 'success'
      });
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
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
          className="w-full max-w-4xl p-8 rounded-2xl shadow-xl"
          sx={{
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
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
              Doctor Registration
            </Typography>
            <Typography variant="subtitle2" className="text-gray-500 mt-4 text-center">
              Complete your professional profile to join our medical network
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

            <Divider sx={{ my: 2 }}>Professional Information</Divider>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                fullWidth
                name="licenseNumber"
                label="Medical License Number"
                value={formData.licenseNumber}
                onChange={handleChange}
                error={!!errors.licenseNumber}
                helperText={errors.licenseNumber}
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
            </div>

            <FormControl fullWidth margin="normal" error={!!errors.specialization}>
              <Autocomplete
                multiple
                options={specializations}
                value={formData.specialization}
                onChange={handleSpecializationChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Specializations"
                    placeholder="Select your specialties"
                    error={!!errors.specialization}
                    helperText={errors.specialization}
                    InputProps={{
                      ...params.InputProps,
                      sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
                    }}
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      {...getTagProps({ index })}
                      label={option}
                      sx={{
                        borderRadius: '8px',
                        backgroundColor: '#e0f2fe',
                        color: '#0369a1'
                      }}
                    />
                  ))
                }
              />
            </FormControl>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                fullWidth
                name="yearsOfExperience"
                label="Years of Experience"
                type="number"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' },
                  inputProps: { min: 0, max: 50 }
                }}
              />

              <TextField
                fullWidth
                name="hospital"
                label="Hospital/Clinic Name"
                value={formData.hospital}
                onChange={handleChange}
                margin="normal"
                InputProps={{
                  sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
                }}
              />
            </div>

            <Divider sx={{ my: 2 }}>Citizenship Information</Divider>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              name="qualifications"
              label="Qualifications (MD, MBBS, etc.)"
              value={formData.qualifications}
              onChange={handleChange}
              margin="normal"
              InputProps={{
                sx: { borderRadius: '12px', backgroundColor: 'rgba(243, 244, 246, 0.5)' }
              }}
            />

            <TextField
              fullWidth
              name="address"
              label="Practice Address"
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
                  I certify that all information provided is accurate and agree to the{' '}
                  <Link href="/terms" color="primary" underline="hover">Terms of Service</Link> and{' '}
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
              {isLoading ? 'Submitting...' : 'Register as Doctor'}
            </Button>

            <Typography variant="body2" className="text-center mt-4 text-gray-600">
              Already have an account?{' '}
              <Link 
                href="/auth/login" 
                color="primary" 
                fontWeight="medium"
                underline="hover"
              >
                Login
              </Link>
            </Typography>
          </form>
        </Paper>
      </div>
      
   

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