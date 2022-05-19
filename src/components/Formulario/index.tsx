import React, { useState } from 'react';
import { ITarefas } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';


interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

const Formulario = ({ setTarefas }: Props) => {

    const [tarefa, setTarefa] = useState({
        tarefa: "",
        tempo: "00:00"
    });

    const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    ...tarefa,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )

        setTarefa({
            tarefa: "",
            tempo: "00:00"
        });
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    id='tarefa'
                    value={tarefa.tarefa}
                    onChange={e => setTarefa({ ...tarefa, tarefa: e.target.value })}
                    placeholder='O que você quer estudar'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={tarefa.tempo}
                    onChange={e => setTarefa({ ...tarefa, tempo: e.target.value })}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>

            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

export default Formulario;