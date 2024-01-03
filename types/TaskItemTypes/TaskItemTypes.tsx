export interface ITodoTypes {
    status : string,
    date : string,
    task : string
}

export type PropTodo = {
    todos : ITodoTypes,
    onClick : () => void
}