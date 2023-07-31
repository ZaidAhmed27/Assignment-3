const ButtonAdd = document.getElementById('ButtonAdd');
const MyListInput = document.getElementById('MyList');
const todoList = document.getElementById('todoList');
const dingSound = document.getElementById('dingSound');
const deleteSound = document.getElementById('deleteSound');
const addSound = document.getElementById('addSound');


function createTodoItem(todoText) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const AddText = document.createElement('span');
    AddText.textContent = todoText + ' 😀'; // Adding an emoji to the todo item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    li.appendChild(checkbox);
    li.appendChild(AddText);
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', function() {
        deleteSound.play();
        li.classList.add('removing');
        setTimeout(() => {
            li.remove();
        }, 100);
    });

    checkbox.addEventListener('change', function() {
        li.classList.toggle('checked');
        if (checkbox.checked) {
            todoList.appendChild(li);
            dingSound.play();
        } else {
            todoList.insertBefore(li, todoList.firstChild);
        }
    });

    return li;
}

ButtonAdd.addEventListener('click', function() {
    const todoText = MyListInput.value.trim();
    if (todoText !== '') {
        const todoItem = createTodoItem(todoText);
        todoList.insertBefore(todoItem, todoList.firstChild);
        MyListInput.value = '';
        addSound.play();
    }
});
