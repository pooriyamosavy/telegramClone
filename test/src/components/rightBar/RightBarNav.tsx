'use Server'

import { Menu } from "@mui/icons-material";
import { Box, IconButton, Stack, TextField } from "@mui/material";

export default function RightBarNav() {
    return (
        <Stack px={2} direction="row" alignItems="center" gap={2}>
            <Box
                flex={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <IconButton sx={{ color: "white" }}>
                    <Menu sx={{ fontSize: 30 }} />
                </IconButton>
            </Box>
            <Box flex={8}>
                <TextField
                    placeholder="Search..."
                    type="text"
                    variant="outlined"
                    size="small"
                    sx={{
                        bgcolor: "#181818",
                        width: "100%",
                        borderRadius: "999px",
                    }}
                    InputProps={{
                        sx: {
                            borderRadius: "999px",
                            color: "white",
                        },
                    }}
                />
            </Box>
        </Stack>
    );
}
