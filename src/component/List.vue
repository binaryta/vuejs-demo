<template>
  <div>
    <ul>
      <li v-if="filterType == todo.status">
        <input 
          class="toggle"
          type="checkbox"
          @change="checkedTodo()"
          :checked="todo.status">
        </input>
        <label>{{todo.text}}</label>
        <button class="destroy" @click="$emit('destroy', todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";
import Todo from "../todo";

@Component
export default class ListComponent extends Vue {
  @Prop()
  public todo: Todo;
  @Prop()
  public filterType: boolean;

  public checkedTodo() {
    this.todo.status = !this.todo.status;
  }
}
</script>

<style>
ul {
  margin: 5px 0px 5px 0px;
  padding: 0;
  list-style: none;
  color: #333;
}
li {
  padding-top: 2px;
  padding-bottom: 5px;
}
.toggle {
  height: 20px;
}
label {
  font-size: 24px;
  line-height: 0px;
  word-break: break-all;
}
.destroy {
  float: right;
  padding: 2px 5px 2px 5px;
  margin-top: 8px;
  margin-right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  color: rgba(234, 107, 107, 0.70);
  font-weight: bold;
}
.destroy:hover {
  color: rgba(234, 107, 107, 1);
}
</style>
