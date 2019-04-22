class Component {
  constructor(protected _selector: string, protected _template: string) {}

  get selector(): string {
    return this._selector.toUpperCase();
  }

  set selector(value: string) {
    this._selector = value;
  }

  render() {}
}

class Table extends Component {
  constructor(protected _selector: string, protected _template: string) {
    super(_selector, _template);
  }

  render() {
    super.render();
  }
}

let c = new Component("div#one", "<h1>Hello</h1>");
c.selector = "div#two";
c.render();
