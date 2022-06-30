import React from 'react';
import s from './Main.module.css'

type MainPropsType = {

}

export const Main:React.FC<MainPropsType> = (props) => {
    return (
        <main className={s.main_container}>
            main
        </main>
    );
};

