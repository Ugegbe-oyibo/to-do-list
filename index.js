class TodoList extends HTMLElement {
    constructor() {
        super();
    }
 
    connectedCallback() {
        this.innerHTML = `
            <div class="todo-list">
                <todo-header></todo-header>
                <todo-progress></todo-progress>
                <todo-checklist></todo-checklist>
                <todo-buttons></todo-buttons>
            </div>
        `;
    }
}
 
class TodoHeader extends HTMLElement {
    constructor() {
        super();
        this.addButton = this.addButton.bind(this);
    }
 
    connectedCallback() {
        this.innerHTML = `
            <h2>TODAY</h2>
            <button class="add-button">+</button>
        `;
        this.querySelector('.add-button').addEventListener('click', this.addButton);
    }
 
    addButton() {
        console.log('Add button clicked');
    }
}
 
class TodoProgress extends HTMLElement {
    constructor() {
        super();
    }
 
    connectedCallback() {
        this.innerHTML = `
            <progress value="33" max="100"></progress>
        `;
    }
}
 
class TodoChecklist extends HTMLElement {
    constructor() {
        super();
    }
 
    connectedCallback() {
        this.innerHTML = `
        <ul>
        <li><input type="radio" name="task" checked><span class="tick"></span>Meditation</li>
        <li><input type="radio" name="task">Pickup Anna</li>
        <li><input type="radio" name="task">Setup Meeting with Jay</li>
        <li><input type="radio" name="task">Finish Daily Ui</li>
        <li><input type="radio" name="task">Second edits on article</li>
        <li><input type="radio" name="task"><span class="tick"></span>Email</li>
    </ul>
            <hr>
            <br>
        `;
    }
}
 
class TodoButtons extends HTMLElement {
    constructor() {
        super();
    }
 
    connectedCallback() {
        this.innerHTML = `
            <div class="button-container">
                <button class="daily">Daily</button>
                <button class="weekly">Weekly</button>
            </div>
            <div class="button-container">
                <button class="monthly">Monthly</button>
                <button class="occasional">Occasional</button>
            </div>
        `;
    }
}
 
customElements.define('todo-list', TodoList);
customElements.define('todo-header', TodoHeader);
customElements.define('todo-progress', TodoProgress);
customElements.define('todo-checklist', TodoChecklist);
customElements.define('todo-buttons', TodoButtons);