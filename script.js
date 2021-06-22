let list = document.querySelector('.tl-tasks');
let addBtn = document.querySelector('.tl-input-btn');
let input = document.querySelector('.tl-input');
let li;
window.onload = function(){
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.length!==0){
            addElement(localStorage.getItem(localStorage.key(i)));
        }
    }
}
function addElement(value = 'default'){
    if (value !== 'default'){
        li = document.createElement('li');
        li.classList.add('tl-task');
        li.innerHTML = `
            <input type="checkbox" class="check">
            ${value}
        <button class="removeBtn">Remove</button>
        <button class="editBtn">Edit</button>
            `;
        li.id = "" + localStorage.length++;
    } else {
        li = document.createElement('li');
        li.classList.add('tl-task');
        li.innerHTML = `
            <input type="checkbox" class="check">
            ${input.value}
        <button class="removeBtn">Remove</button>
        <button class="editBtn">Edit</button>
            `;
        if (input.value === ''){
            alert('You need to input a value');
            return;
        }
        li.id = "" + localStorage.length++;
        localStorage.setItem(li.id, input.value);
    }
    list.append(li);
    checkListener();
    removeListener();
    editListener();
    input.value = '';
}
addBtn.addEventListener('click',() => addElement());
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13){
        e.preventDefault();
        addElement();
    }
})

function editListener(){
    for (const editButton of document.querySelectorAll('.editBtn')) {
        editButton.addEventListener('click', function (){
            let newTask = prompt('Input a new task');
            if (newTask === null){
                return 0;
            }
            li.innerHTML = `
            <input type="checkbox" class="check">
            ${newTask}
        <button class="removeBtn">Remove</button>
        <button class="editBtn">Edit</button>
            `;
            checkListener();
            removeListener();
            console.log(this.id);
            localStorage.setItem(li.id, newTask);
        });
    }
}

function removeListener(){
    for (const removeBtn of document.querySelectorAll('.removeBtn')) {
        removeBtn.addEventListener('click', function (){
            this.parentNode.remove();
            localStorage.removeItem(this.parentNode.id);
        });
    }
}

function checkListener(){
    for (const ch of document.querySelectorAll('.check')) {
        ch.addEventListener('change',function (){
            if (this.checked === true){
                this.parentNode.style.textDecoration = 'line-through';
            } else {
                this.parentNode.style.textDecoration = 'none';
            }
        });
    }
}