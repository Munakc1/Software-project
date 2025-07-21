"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  useTheme
} from "@mui/material";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Find a Doctor", href: "/doctors" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Medical Records", href: "/medical-records" },
  { name: "Appointment Booking", href: "/appointments" },
  { name: "E-Prescriptions", href: "/prescriptions" },
  { name: "Lab Reports", href: "/lab-reports" },
  { name: "Vaccination Tracker", href: "/vaccination" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#3A5E6D',
        color: 'white',
        py: 8,
        px: { xs: 2, md: 4 },
        fontFamily: 'inherit'
      }}
    >
      <Box sx={{ 
        maxWidth: 'xl', 
        mx: 'auto',
        px: { xs: 2, md: 4 }
      }}>
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              lg: 'repeat(4, 1fr)' 
            },
            gap: 6,
            mb: 6
          }}
        >
          {/* Brand Section */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3,
            pr: 2
          }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: 'white',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                lineHeight: 1.2,
                mb: 1
              }}
            >
              Medipal
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: 1.7,
                fontSize: '1.05rem'
              }}
            >
              Revolutionizing healthcare through innovative digital solutions for seamless patient experiences and improved outcomes.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2.5,
              mt: 2
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Phone color="white" size={22} />
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1.05rem'
                }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Mail color="white" size={22} />
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1.05rem'
                }}>
                  support@medipal.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <MapPin color="white" size={22} />
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '1.05rem'
                }}>
                  123 Healthcare St, Medical City
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3 
          }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: 'white',
                fontSize: '1.3rem',
                mb: 1
              }}
            >
              Quick Links
            </Typography>
            <List sx={{ p: 0 }}>
              {quickLinks.map((link) => (
                <ListItem key={link.name} sx={{ 
                  p: 0, 
                  mb: 1.5,
                  '&:hover': {
                    transform: 'translateX(4px)'
                  },
                  transition: 'transform 0.2s ease'
                }}>
                  <Link
                    href={link.href}
                    style={{ textDecoration: 'none', width: '100%' }}
                  >
                    <ListItemText
                      primary={link.name}
                      sx={{
                        '& .MuiTypography-root': {
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontSize: '1.05rem',
                          fontWeight: 500,
                          '&:hover': {
                            color: 'white',
                            fontWeight: 600
                          }
                        }
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Our Services */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3 
          }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: 'white',
                fontSize: '1.3rem',
                mb: 1
              }}
            >
              Our Services
            </Typography>
            <List sx={{ p: 0 }}>
              {services.map((service) => (
                <ListItem key={service.name} sx={{ 
                  p: 0, 
                  mb: 1.5,
                  '&:hover': {
                    transform: 'translateX(4px)'
                  },
                  transition: 'transform 0.2s ease'
                }}>
                  <Link
                    href={service.href}
                    style={{ textDecoration: 'none', width: '100%' }}
                  >
                    <ListItemText
                      primary={service.name}
                      sx={{
                        '& .MuiTypography-root': {
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontSize: '1.05rem',
                          fontWeight: 500,
                          '&:hover': {
                            color: 'white',
                            fontWeight: 600
                          }
                        }
                      }}
                    />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Legal & Social */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 4 
          }}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: 'white',
                  fontSize: '1.3rem',
                  mb: 1
                }}
              >
                Legal
              </Typography>
              <List sx={{ p: 0 }}>
                {legalLinks.map((link) => (
                  <ListItem key={link.name} sx={{ 
                    p: 0, 
                    mb: 1.5,
                    '&:hover': {
                      transform: 'translateX(4px)'
                    },
                    transition: 'transform 0.2s ease'
                  }}>
                    <Link
                      href={link.href}
                      style={{ textDecoration: 'none', width: '100%' }}
                    >
                      <ListItemText
                        primary={link.name}
                        sx={{
                          '& .MuiTypography-root': {
                            color: 'rgba(255, 255, 255, 0.85)',
                            fontSize: '1.05rem',
                            fontWeight: 500,
                            '&:hover': {
                              color: 'white',
                              fontWeight: 600
                            }
                          }
                        }}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Social Links */}
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: 'white',
                  fontSize: '1.3rem',
                  mb: 2
                }}
              >
                Follow Us
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: 2,
                flexWrap: 'wrap'
              }}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <IconButton
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        p: 1.5,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          transform: 'scale(1.1)'
                        },
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Icon size={22} />
                    </IconButton>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Divider sx={{
          borderColor: 'rgba(255, 255, 255, 0.15)',
          my: 4
        }} />
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3,
          pt: 2
        }}>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            © {new Date().getFullYear()} Medipal. All rights reserved.
          </Typography>
          
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '1rem'
            }}>
              <Box component="span" sx={{ fontSize: '1.1rem' }}>🔒</Box>
              <Typography variant="body1">HIPAA Compliant</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ 
              borderColor: 'rgba(255, 255, 255, 0.3)',
              height: '1.2rem'
            }} />
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '1rem'
            }}>
              <Box component="span" sx={{ fontSize: '1.1rem' }}>🛡️</Box>
              <Typography variant="body1">SSL Secured</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ 
              borderColor: 'rgba(255, 255, 255, 0.3)',
              height: '1.2rem'
            }} />
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '1rem'
            }}>
              <Box component="span" sx={{ fontSize: '1.1rem' }}>📱</Box>
              <Typography variant="body1">Mobile Ready</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}