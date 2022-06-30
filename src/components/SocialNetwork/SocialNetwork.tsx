import React from 'react';
import {Box} from '@mui/material';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Navigation} from "./Navigation/Navigation";
import s from './SocialNetwork.module.css'

type SocialNetworkPropsType = {}

export const SocialNetwork: React.FC<SocialNetworkPropsType> = (props) => {
    return (
        <div className={s.root_container}>
            <Box className={s.container} display="grid" gridTemplateColumns="repeat(12, 1fr)" alignContent={"flex-start"}>
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
        </div>
    );
};

