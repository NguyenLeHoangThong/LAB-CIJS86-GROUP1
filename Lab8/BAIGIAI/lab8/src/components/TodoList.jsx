import { useContext } from 'react';
import { TodoContext } from '../App';
import TodoItem from './TodoItem';


export default function () {
    const { data } = useContext(TodoContext);

    return (
        <div>
            <ul>
                {data?.map((item) => (
                    <TodoItem key={item.id} data={item} />
                ))}
            </ul>
        </div>
    )
}
