import LeftBar from "@/components/leftBar/LeftBar";
import RightBar from "@/components/rightBar/RightBar";
import { Box, Container, Stack } from "@mui/material";

export default function Home() {
    return (
        <Box
            sx={{
                height: "100vh",
                bgcolor: "#181818",
            }}
        >
            <Box
                sx={{
                    p: "0 !important",
                    mx: 'auto',
                    maxWidth: '1700px'
                }}
            >
                <Stack height="100vh" direction="row">
                    <RightBar />
                    <LeftBar />
                </Stack>
            </Box>
        </Box>
    );
}
