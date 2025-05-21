async function getAllTodos(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
        next: {revalidate:10},
    } );
    return await response.json();

}

const TodosPage = async () =>{
    const todos = await getAllTodos();
    return(
        <div>
           <h1 className="text-4xl font-bold">Todos</h1>
           <div className="grid grid-cols-3 gap-5">
                {
                    todos && Array.isArray(todos) && todos.map( (todo) =>
                    <div className="border p-3 shadow-lg rounded-lg font-light" key={todo.id}>
                        <h4>{todo.title}</h4>
                    </div> )
                }

           </div>
        </div>
    );
}

export default TodosPage;