let divOutput = document.querySelector('.div-output');
let inpText = document.querySelector('.inp-text');
let subBtn = document.querySelector('.sub-btn');

let todos = [];

function addTodos(text){
    const todo = {
        id: `${Math.random()}`,
        text,
        done: false,
    };
    todos.push(todo);
}
function deleteTodos(id) {
    todos.forEach(todo => {
        if(todo.id == id){
            todo.done = true;
        }
    })
}
function renderer(){
    let html = ``;

    todos.forEach(todo => {
        if(todo.done){
            return;
        }
        html += `
        <div>
        ${todo.text} <button class="done" data-id='${todo.id}'>Done</button>
        </div>
        `
    });

    divOutput.innerHTML = html;
}
subBtn.addEventListener('click', () => {
    const text = inpText.value;

    if (text == '') {
        inpText.style.border = '2px solid #ea0404';
        inpText.style.borderRadius = '3px';
    } else if(text){
        inpText.style.border = '2px solid green';
        inpText.style.borderRadius = '3px';
        addTodos(text);
        renderer();
    } 
    
})
divOutput.addEventListener('click', (event) => {
    if(event.target.tagName !== 'BUTTON'){
        return;
    }
    const id = event.target.dataset.id;

    deleteTodos(id);
    renderer();
})







    