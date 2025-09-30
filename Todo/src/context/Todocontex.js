import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id : 1,
            todo : message ,
            completed : false
        }
    ],
    addTodo : (todo) => {},
    UpdateTodo : ( id , todo) => {},
    DeleteTodo : (id) => {},
    togglecompleted: (id) => {}
});

export const UseTodo  = ()=> {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider

