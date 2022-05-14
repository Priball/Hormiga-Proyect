import React from "react";
import Navbar from "../../common/Navbar/Navbar";
import Sidebar from "../../common/Sidebar/Sidebar";
import {Box, Stack} from "@mui/material";


const Dashboard = () => {

    return(
        <Box>
            
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
                
                <Sidebar />
                Hola
            </Stack>
            
        </Box>
    );
}

export default Dashboard;