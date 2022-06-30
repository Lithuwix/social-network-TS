import React from 'react';
import {Box} from '@mui/material';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Navigation} from "./Navigation/Navigation";

type SocialNetworkPropsType = {}

export const SocialNetwork: React.FC<SocialNetworkPropsType> = (props) => {
    return (
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={0}>
            <Box gridColumn="span 12">
                <Header/>
            </Box>
            <Box gridColumn="span 2">
                <Navigation/>
            </Box>
            <Box gridColumn="span 10">
                <Main/>
            </Box>
        </Box>
    );
};

