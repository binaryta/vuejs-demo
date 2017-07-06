import {Vue, Component} from "vue-property-decorator";
import ListComponent from "../component/List.vue";
import Todo from "../data/todo";
import {HomeStore} from "../store/home";
import {Subscription} from 'rxjs';

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

  public store: HomeStore = new HomeStore();
  public subscription: Subscription;

  public created(): void {
    this.store.onTodosChanged.subscribe( todos => {
      this.todos = todos;
    })

    this.store.onInputTextChanged.subscribe( text => {
      this.inputText = text;
    })
  }

  public inputTextUpdate(text: string) {
    this.store.changeInputText(text);
  }

  public filterTodo(filterType: boolean) {
    this.filterType = filterType;
  }

  public createTodo(text: string) {
    this.store.addTodo(text);
    this.store.changeInputText("");
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
