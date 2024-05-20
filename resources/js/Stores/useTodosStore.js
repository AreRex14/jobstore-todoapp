import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [],
        id: 0,
        showAlert: false,
    }),
    actions: {
        addTodo(todo) {
            const newTodo = {
                id: ++this.id,
                title: todo,
                is_completed: false,
                created_at: new Date().toLocaleString(),
            }
            this.todos.unshift(newTodo);
            this.saveTodos();
        },
        saveTodos() {
            sessionStorage.setItem('todos', JSON.stringify(this.todos))
        },
        loadTodos() {
            const todos = sessionStorage.getItem('todos')
            if (todos) {
              this.todos = JSON.parse(todos)
            }
          },
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => todo.id !== id);
            this.saveTodos();
        },
        toggleTodo(id) {
            this.todos = this.todos.map((todo) => {
                if (todo.id === id) {
                    todo.is_completed = !todo.is_completed;
                }
                return todo;
            });
        },
        toggleShowAlert() {
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 3000);
        },
    },
});