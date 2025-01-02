import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <div className='mt-3'>
      <Box component="footer" className="bg-[#3C4142] text-gray-300 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Column 1 */}
          <div>
            <Typography variant="h6" className="mb-4">
              Content
            </Typography>
            <ul>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Page 1
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  page 2
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Page 3
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <Typography variant="h6" className="mb-4">
              Content
            </Typography>
            <ul>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Page1
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Page 2
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Page 3
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <Typography variant="h6" className="mb-4">
              Content
            </Typography>
            <ul>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Page 1
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Page 2
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="none">
                  Page 3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
