<script setup>
import { ref } from "vue";
import { useTodosStore } from "../../Stores/useTodosStore";

const todosStore = useTodosStore();
const todo = ref(null);

function addItemAndClear(item) {
    if (item.length === 0) {
    todosStore.toggleShowAlert();
    return;
    }
    todosStore.addTodo(item);
    todo.value = null;
}


</script>

<template>
    <div>
        <form @submit.prevent="addItemAndClear(todo)">
            <input v-model="todo" type="text" placeholder="Add Todo" />
            <button>Add</button>
            <div class="alert">
                <div v-show="todosStore.showAlert">
                Add your todo
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>  

input {
  margin-top: 25px;
  margin-bottom: 15px;
  height: 20px;
  width: 20%;
  color: blue;
}
button {
  margin-left: 30px;
  background-color: blue;
  font-weight: 800;
  color: white;
  width: 15%;
}

.alert {
  color: red;
}
</style>