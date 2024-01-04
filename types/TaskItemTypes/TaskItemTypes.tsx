export interface ITodoTypes {
    status : 'pending' | 'expired' | 'done',
    date : string,
    task : string
    id? : string
}

export interface ITodosTypes {
    todos : ITodoTypes[]
}

export type PropTodo = {
    todos : ITodoTypes[],
    onClick? : () => void
}