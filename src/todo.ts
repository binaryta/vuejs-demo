export default class Todo {
  public id: number;
  public text: string;
  public status: boolean = false;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}
