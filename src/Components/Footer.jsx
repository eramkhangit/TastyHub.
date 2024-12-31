import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" className="bg-[#3C4142] text-gray-300 md:mt-[485px]  py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Column 1 */}
        <div>
          <Typography variant="h6" className="mb-4">
            Company
          </Typography>
          <ul>
            <li>
              <Link href="#" color="inherit" underline="none">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <Typography variant="h6" className="mb-4">
            Support
          </Typography>
          <ul>
            <li>
              <Link href="#" color="inherit" underline="none">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <Typography variant="h6" className="mb-4">
            Follow Us
          </Typography>
          <ul>
            <li>
              <Link href="#" color="inherit" underline="none">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="none">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
