"use client";
import { Box, Container, Divider, IconButton, Typography } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Email, Phone } from '@mui/icons-material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      className="bg-gray-900 text-white mt-12"
      sx={{
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-blue-400">
              Medipal
            </Typography>
            <Typography variant="body2" className="text-gray-300">
              Your trusted healthcare companion providing seamless medical record management, 
              appointment scheduling, and personalized health insights.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-blue-400">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-300 hover:text-white transition">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-blue-400">
              Our Services
            </Typography>
            <ul className="space-y-2">
              <li className="text-gray-300">Medical Records</li>
              <li className="text-gray-300">Appointment Booking</li>
              <li className="text-gray-300">E-Prescriptions</li>
              <li className="text-gray-300">Lab Reports</li>
              <li className="text-gray-300">Vaccination Tracker</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-blue-400">
              Contact Us
            </Typography>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Email className="mr-2 text-blue-400" />
                <span>support@medipal.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="mr-2 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex space-x-2 mt-4">
                <IconButton aria-label="Facebook" className="text-gray-300 hover:text-blue-500">
                  <Facebook />
                </IconButton>
                <IconButton aria-label="Twitter" className="text-gray-300 hover:text-blue-400">
                  <Twitter />
                </IconButton>
                <IconButton aria-label="LinkedIn" className="text-gray-300 hover:text-blue-600">
                  <LinkedIn />
                </IconButton>
                <IconButton aria-label="Instagram" className="text-gray-300 hover:text-pink-500">
                  <Instagram />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        <Divider className="my-6 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <Typography variant="body2" className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Medipal. All rights reserved.
          </Typography>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </Box>
  );
}