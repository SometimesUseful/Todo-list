let list = document.querySelector('.tl-tasks');
let addBtn = document.querySelector('.tl-input-btn');
let input = document.querySelector('.tl-input');
let iterator = 0;
let li;
window.onload = (function (){
    for (let i = 0; i < localStorage.length; i++) {
        addElement(localStorage.getItem(localStorage.key(i.toString())));
    }
});

function addElement(value = 'default'){
    for (let listItem of document.querySelectorAll('li')){
        iterator++;
        listItem.id = iterator.toString();
    }
    if (value !== 'default'){
        li = document.createElement('li');
        li.classList.add('tl-task');
        li.innerHTML = `
            <input type="checkbox" class="check">
            ${value}
        <button class="removeBtn">Remove</button>
        <button class="editBtn">Edit</button>
            `;
        for (let listItem of document.querySelectorAll('li')){
            iterator++;
            listItem.id = iterator.toString();
        }
        localStorage.setItem(li.id, value);
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
        for (let listItem of document.querySelectorAll('li')){
            iterator++;
            listItem.id = iterator.toString();

        }
        localStorage.setItem(li.id, input.value);
    }
    list.append(li);
    for (const ch of document.querySelectorAll('.check')) {
        ch.addEventListener('change',function (){
            if (this.checked === true){
                this.parentNode.style.textDecoration = 'line-through';
            } else {
                this.parentNode.style.textDecoration = 'none';
            }
        });
    }
    for (const removeBtn of document.querySelectorAll('.removeBtn')) {
        removeBtn.addEventListener('click', function (){
           this.parentNode.remove();
           localStorage.removeItem(this.parentNode.id)
        });
    }
    for (const editButton of document.querySelectorAll('.editBtn')) {
        editButton.addEventListener('click', function (){
            let newTask = prompt('Input a new task');
            if (newTask === null){
             return 0;
            }
            localStorage.setItem(this.parentNode.id, newTask);
        });
    }
    for (let listItem of document.querySelectorAll('li')){
        iterator++;
        listItem.id = iterator.toString();
    }
    iterator = 0;
    input.value = '';
}
addBtn.addEventListener('click',() => addElement());
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13){
        e.preventDefault();
        addElement();
    }
})
