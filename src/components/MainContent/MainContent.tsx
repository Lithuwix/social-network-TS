import React from 'react';
import { Box } from '@mui/material';

export const MainContent = () => {
    return (
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 12">
                <div>header</div>
            </Box>
            <Box gridColumn="span 2">
                <div>main-nav</div>
            </Box>
            <Box gridColumn="span 10">
                <div>main</div>
            </Box>
        </Box>
    );
};

