const basePath = (process.env.NODE_ENV === 'production' ? '/todo-list':'');

export const doRequest = (path, params) => {
    let mergedParams = {
        credentials: 'same-origin',
        ...params
    }
    return fetch(basePath+path, mergedParams);
}

export const doRequestWithBody = (path, method, body) => {
    return doRequest(path, {
        headers: {
            'content-type': 'application/json'
        },
        method,
        body: JSON.stringify(body)
    })
}

export const doDeleteRequest = (path) => {
    return doRequest(path, {
        method: 'delete'
    })
}
const TODO_PATH = "/api/tasks";

export const getTodos = () => {
    return doRequest(TODO_PATH).then((response) => response.json());
};

export const addTodo = (todo) => {
    return doRequestWithBody(TODO_PATH, "post", todo);
};

export const updateTodo = (todo) => {
    return doRequestWithBody(
        TODO_PATH + "/" + todo.id,
        "put",
        todo
    ).then((response) => response.json());
};

export const deleteTodo = (todoId) => {
    return doDeleteRequest(TODO_PATH + "/" + todoId);
};
