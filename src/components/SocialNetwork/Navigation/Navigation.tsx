import React from 'react';
import s from './Navigation.module.css'

type NavigationPropsType = {}

export const Navigation: React.FC<NavigationPropsType> = (props) => {
    return (
        <nav className={s.navigation_container}>
            <div>profile</div>
            <div>messages</div>
        </nav>
    );
};

