import { Avatar, Box, Stack, Tab, Typography } from "@mui/material";

export type Props = {
    isActive: boolean
    onSelect: ()=>void,
    i: number
};

export default function RightBarChats({
    isActive,
    i,
    onSelect,
}: Props) {
    return (
        <div onClick={onSelect}>
            <Stack
                flexDirection="row"
                gap={1}
                p={1}
                textOverflow="ellipsis"
                sx={({palette})=>({
                    borderRadius: 4,
                    transition: "all ease .2s",
                    cursor: "pointer",
                    "&:hover": {
                        bgcolor: isActive ? palette.primary.main : "#313131",
                    },
                    bgcolor: isActive ? palette.primary.main : 'transparent'
                })}
            >
                <Avatar
                    sx={{ height: 50, width: 50 }}
                    src="blob:https://web.telegram.org/bd840c21-966b-4834-847a-99242bfeedbc"
                />
                <Box flex={1} zIndex={100} width="100%">
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography variant="h6" fontSize={16}>
                            Saved Massages {i}
                        </Typography>
                        <Typography variant="subtitle1" fontSize={10}>
                            jun 10
                        </Typography>
                    </Stack>
                    <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Box flex={1}>
                            <Typography
                                variant="h6"
                                fontSize={12}
                                noWrap
                                maxWidth={200}
                            >
                                owada aw djaw dauwn PAOAw aidawpuuha
                                iuafoauyfeea jda9hd
                            </Typography>
                        </Box>
                        <Box>awd</Box>
                    </Stack>
                </Box>
            </Stack>
        </div>
    );
}
