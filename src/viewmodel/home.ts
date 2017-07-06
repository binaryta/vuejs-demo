import {Vue, Component} from "vue-property-decorator";
import ListComponent from "../component/List.vue";
import Todo from "../todo";

@Component({
  components: {
    "todo-list": ListComponent
  },
  filters: {
    pluralize: function(n) {
      return n===1 ? 'item' : 'items';
    }
  }
})
class HomeViewModel extends Vue {
  public inputText: string = "";
  public todos: Todo[] = [];
  public filterType: boolean = false;

  public inputTextUpdate(text: string) {
    this.inputText = text;
  }

  public filterTodo(filterType: boolean) {
    this.filterType = filterType;
  }

  public createTodo(text: string) {
    const todo = new Todo(this.todos.length + 1, text);
    this.todos.push(todo);
    this.inputText = "";
  }

  public destroyTodo(index: number) {
    const todos = this.todos.filter( todo => {
      return todo.id != index
    })
    this.todos = todos;
  }
}

new HomeViewModel({
  el: "#main"
})
