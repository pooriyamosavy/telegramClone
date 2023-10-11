import { Menu, MoreVert, Search } from "@mui/icons-material";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import bg from '../../assets/bg.svg'

export default function LeftBar() {
    return (
        <Box flex={3} position='relative'>
            <Stack
                justifyContent="space-between"
                position="sticky"
                bgcolor="#212121"
                p={1}
                direction='row'
            >
                <Stack direction="row" gap={2} px={2}>
                    <Avatar sx={{ height: "45px", width: "45px" }} />
                    <Box>
                        <Typography variant="h6" fontSize={16}>
                            chat title
                        </Typography>
                        <Typography variant="h6" fontSize={14}>
                            90000000 subscribers
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction='row'>
                    <IconButton sx={{ color: "white" }}>
                        <Search sx={{ fontSize: 30 }} />
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                        <MoreVert sx={{ fontSize: 30 }} />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
}
