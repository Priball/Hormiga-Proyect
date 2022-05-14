import { styled, alpha } from '@mui/material/styles';
import { AppBar, Badge, Box, IconButton, InputBase,  Toolbar, Typography } from "@mui/material";
import { Mail, AccountCircle, Notifications, Menu, Search } from "@mui/icons-material";

import React from "react";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const SearchWrapper = styled('div')(({theme}) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    padding:"30 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    marginLeft: theme.spacing(3),
   
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        
    
    
  },display:"block"
 
    
  }));

const Icons = styled(Box)(({theme}) => ({
}));

const Navbar = () => {

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar variant="regular">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        root={
                           { color: "secondary"}
                        }
                        
                        sx={{color: "secondary", display: { xs: 'none', sm: 'block' },  }}
                    >
                        Hormiga
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <SearchWrapper>
                        <SearchIconWrapper>
                            <Search />
                        </SearchIconWrapper>
                        
                        <StyledInputBase placeholder="buscar..."  />
                    </SearchWrapper>
                    <Icons>
                        
                        
                    </Icons>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton color="hGrey">
                            <Badge badgeContent={4} color="error">
                                <Mail  />
                            </Badge>
                        </IconButton>
                        <IconButton color="hGrey">
                            <Badge badgeContent={2} color="error">
                                <Notifications />
                            </Badge>
                        </IconButton>
                        <IconButton color="hGrey">
                            
                                <AccountCircle />
                            
                        </IconButton>
                    </Box>
                </StyledToolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;