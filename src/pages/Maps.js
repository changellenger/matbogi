import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import Naverapimap from "./naverapimap";
import Container from "@mui/material/Container";
import * as React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from '@mui/material/IconButton';

const Maps = () => {

    const searchBox = (
        <TextField id="outlined-search" label="Search field" type="search" sx={{bgcolor:'white', zIndex:'100',}}/>
    );

    // const [searchOpen, setSearchOpen] = React.useState(false);
    // const handleChange = () => {
    //     setSearchOpen((prev) => !prev);
    // };

    return (
            <Container maxWidth="lg" sx={{ mt: 4 , ml: 4 ,mr: 4 }}>
                <TextField id="outlined-search" label="Search field" type="search" sx={{bgcolor:'white', mb: 2, zIndex:'100',}}/>
                <IconButton color="inherit">
                    <SearchIcon sx={{ mr: 1, align:'right' }}/>
                </IconButton>
                {/*<Grid item xs={12} md={12} lg={12} sx={{position:'absolute'}}>*/}
                {/*    <Collapse in={searchOpen}>*/}
                {/*        {searchBox}*/}
                {/*    </Collapse>*/}
                {/*</Grid>*/}
                <Grid item xs={12} md={12} lg={12}>
                    <Naverapimap />
                    <div className={"map"}></div>
                </Grid>
                {/* Recent Deposits
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Deposits />
                                </Paper>
                            </Grid>
                             Recent Orders
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Orders />
                                </Paper>
                            </Grid>*/}

            </Container>
    );
};

export default Maps;