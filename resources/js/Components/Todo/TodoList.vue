<template>
    <div v-for="todo in todos" :key="todo.id" class="list">
    <div class="item">
      <span :class="{ completed: todo.is_completed }">{{ todo.title }}</span>
      <span>{{ todo.created_at }}</span>
      <div>
        <span @click.stop="toggleTodo(todo.id)">&#10004;</span>
        <span @click="deleteTodo(todo.id)" class="x">&#10060;</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useTodosStore } from "../../Stores/useTodosStore";
import { storeToRefs } from "pinia";

const todosStore = useTodosStore();

const { todos } = storeToRefs(todosStore);
const { toggleTodo, deleteTodo } = todosStore;

onMounted(() => {
    todosStore.loadTodos();
})

</script>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}

.list {
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
</style>