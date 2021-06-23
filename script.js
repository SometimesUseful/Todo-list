let list = document.querySelector('.tl-tasks');
let addBtn = document.querySelector('.tl-input-btn');
let input = document.querySelector('.tl-input');

function addElement(){
    if (input.value === ''){
        alert('Enter a task');
        return;
    }
    let li = document.createElement('li');
    li.classList.add('tl-task');
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('removeBtn');
    let editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerText = 'Edit';
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.classList.add('check');
    let inputValue = document.createElement('span');
    inputValue.classList.add('task-value');
    inputValue.innerText = input.value;
    li.append(check);
    li.append(inputValue);
    li.append(removeBtn);
    li.append(editBtn);
    list.append(li);
    check.addEventListener('change',checkListener);
    removeBtn.addEventListener('click', function (){
        this.parentNode.remove();
    });
    editBtn.addEventListener('click',editBtnListener)
    input.value = '';
}

function editBtnListener(){
    let taskValue = document.querySelector('.task-value');
    let newValue = prompt('Enter new task', this.parentNode.childNodes[1].innerText);
    if (newValue.length === 0){
        return;
    }
    this.parentNode.childNodes[1].innerText = newValue;
}

function checkListener(){
    if (this.checked === true){
        this.parentNode.style.textDecoration = 'line-through';
    } else {
        this.parentNode.style.textDecoration = 'none';
    }
}

addBtn.addEventListener('click', () => addElement());
input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13){
        e.preventDefault();
        addElement();
    }
});