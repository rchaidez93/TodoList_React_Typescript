import React, { useState } from 'react';

interface Props {
    addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    const [text, setText] = useState('');
    return (
        <form>
            <input
            className="rounded text-black" 
            type="text"
            value={text}
            onChange={(e) => {
                setText(e.target.value);
            }}
            />
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            type="submit"
            onClick = {(e) => {
                e.preventDefault();
                addTodo(text);
                setText('');
            }}
            >
                Add Todo
            </button>   
        </form>
    );
};

export default AddTodoForm;