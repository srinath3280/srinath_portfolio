import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: '#0f1f3d', color: 'white', mt: 4 }}>
            <Typography variant="body2">
                © {new Date().getFullYear()} Lingadahalli Srinath. All rights reserved.
            </Typography>
            {/* <MuiLink href="https://github.com/" color="inherit" target="_blank" rel="noopener" sx={{ ml: 1 }}>
                GitHub
            </MuiLink> */}
        </Box>
    );
}