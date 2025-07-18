"use client";
import { Box, Container, Divider, IconButton, Typography } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Email, Phone } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      className="bg-black text-gray-200 mt-12"
      sx={{
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About with Logo */}
          <div>
            <div className="flex items-center mb-4">
          
              <Typography variant="h6" className="font-bold text-[#79A085]">
                Medipal
              </Typography>
            </div>
            <Typography variant="body2" className="text-gray-400">
              Your trusted healthcare companion providing seamless medical record management, 
              appointment scheduling, and personalized health insights.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-[#79A085]">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#CDEFDB] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#CDEFDB] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-400 hover:text-[#CDEFDB] transition">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#CDEFDB] transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#CDEFDB] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-[#79A085]">
              Our Services
            </Typography>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-[#CDEFDB] transition cursor-pointer">Medical Records</li>
              <li className="text-gray-400 hover:text-[#CDEFDB] transition cursor-pointer">Appointment Booking</li>
              <li className="text-gray-400 hover:text-[#CDEFDB] transition cursor-pointer">E-Prescriptions</li>
              <li className="text-gray-400 hover:text-[#CDEFDB] transition cursor-pointer">Lab Reports</li>
              <li className="text-gray-400 hover:text-[#CDEFDB] transition cursor-pointer">Vaccination Tracker</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <Typography variant="h6" className="font-bold mb-4 text-[#79A085]">
              Contact Us
            </Typography>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Email className="mr-2 text-[#CDEFDB]" />
                <span>support@medipal.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="mr-2 text-[#CDEFDB]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex space-x-2 mt-4">
                <IconButton aria-label="Facebook" className="text-gray-400 hover:text-[#3b5998]">
                  <Facebook />
                </IconButton>
                <IconButton aria-label="Twitter" className="text-gray-400 hover:text-[#1DA1F2]">
                  <Twitter />
                </IconButton>
                <IconButton aria-label="LinkedIn" className="text-gray-400 hover:text-[#0077B5]">
                  <LinkedIn />
                </IconButton>
                <IconButton aria-label="Instagram" className="text-gray-400 hover:text-[#E1306C]">
                  <Instagram />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        <Divider className="my-6 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <Typography variant="body2" className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Medipal. All rights reserved.
          </Typography>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-[#CDEFDB] text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-[#CDEFDB] text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-[#CDEFDB] text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </Box>
  );
}