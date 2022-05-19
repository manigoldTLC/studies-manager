import React from 'react';
import style from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children: React.ReactNode
}

const Botao = ({children, type, onClick}: Props) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={style.botao}
        >
            {children}
        </button>
    )
}

export default Botao;