import { Box, Direction, Typography } from "@mui/material";
import React from "react";

type TabPanelProps = {
    children: React.ReactNode;
    value: number;
    index: number
    dir?: Direction
}

export default function TabPanel({ children, value, index, dir }: TabPanelProps) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            dir={dir}
        >
            {value === index && (
                <Box sx={{ p: { xs: 1, sm: 3 } }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}