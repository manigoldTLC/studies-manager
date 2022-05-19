import { ITarefas } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';


interface Props {
    tarefas: ITarefas[],
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

const Lista = ({ tarefas, selecionaTarefa }: Props) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        // tarefa={item.tarefa}
                        // tempo={item.tempo}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
  )
}

export default Lista