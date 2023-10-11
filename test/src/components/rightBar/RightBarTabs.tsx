'use Server'
import { Box, Tab, Tabs } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";


export type Props = {
    tab: number;
    setTab: Dispatch<SetStateAction<number>>;
};

export default function RightBarTabs({ setTab, tab }: Props) {
    return (
        <Box mt={2} px={2} borderBottom={1} borderColor="black">
            <Tabs
                value={tab}
                onChange={(e, val) => setTab(val)}
                variant="scrollable"
                scrollButtons={false}
                sx={{
                    width: "100%",
                    color: "white",
                }}
                TabIndicatorProps={{
                    sx: {
                        height: 3,
                        borderRadius: "999px",
                        bgcolor: "transparent",
                        // position: 'relative'
                    },
                    children: (
                        <Box
                            sx={({ palette }) => ({
                                position: "absolute",
                                backgroundColor: palette.primary.main,
                                top: 0,
                                bottom: 0,
                                left: "14px",
                                right: "14px",
                            })}
                        />
                    ),
                }}
            >
                {tabs.map(({ name }, index) => {
                    return (
                        <Tab
                            label={name}
                            key={index}
                            sx={{
                                color: "white",
                                textTransform: "none",
                                paddingInline: 2,
                                minWidth: "auto",
                                maxWidth: "auto",
                                transition: "all ease .2s",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                                "&:hover": {
                                    bgcolor: "rgb(170, 170, 170, 0.08)",
                                },
                            }}
                        />
                    );
                })}
            </Tabs>
        </Box>
    );
}
const tabs = [
    {
        name: "All",
    },
    {
        name: "Contact",
    },
    {
        name: "Non-Contact",
    },
    {
        name: "Groups",
    },
    {
        name: "Channels",
    },
    {
        name: "Bots",
    },
];
