import React from 'react';
import s from './Header.module.css';

type HeaderPropsType = {}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.main_container}>
            header
        </header>
    );
};

