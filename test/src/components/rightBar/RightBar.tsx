"use client";
import { Box, Stack, styled } from "@mui/material";
import RightBarNav from "./RightBarNav";
import RightBarTabs from "./RightBarTabs";

import { Suspense, useState } from "react";
import RightBarChats from "./RightBarChats";

export default function RightBar() {
    const [tab, setTab] = useState(0);
    return (
        <Box
            py={1}
            sx={{
                backgroundColor: "#212121",
                width: "400px",
            }}
            display="flex"
            flexDirection="column"
        >
            <Suspense>
                <RightBarNav />
                <RightBarTabs tab={tab} setTab={setTab} />
            </Suspense>
            <Box
                sx={{
                    width: "400px",
                    height: "100%",
                    position: "relative",
                    isolation: "isolate",
                    overflowX: "hidden",
                }}
            >
                {Array.from({ length: 10 }).map((_, index_1) => {
                    return (
                        <Box
                            sx={{
                                position: "absolute",
                                width: "400px",
                                left: (index_1 - tab) * 400 + "px",
                                right: (index_1 - tab + 1) * 400 + "px",
                                transition: "all ease .5s",
                            }}
                            key={index_1}
                        >
                            {Array.from({ length: 20 }).map((item, index_2) => {
                                return (
                                    <RightBarChats
                                        isActive={+`${index_1}${index_2}` === 1}
                                        onSelect={() => {}}
                                        i={index_1}
                                        key={index_2}
                                    />
                                );
                            })}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}
