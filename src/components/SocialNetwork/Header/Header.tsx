import React from 'react';
import s from './Header.module.css';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
type HeaderPropsType = {}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.main_container}>
            <ConnectWithoutContactIcon fontSize={"large"}/>
        </header>
    );
};

