let list = document.querySelector('.tl-tasks');
let task = document.querySelector('.tl-task');
let addBtn = document.querySelector('.tl-input-btn');
let input = document.querySelector('.tl-input');
let removeBtn = document.querySelector('.removeBtn');
let check = document.querySelector('.check');
let checks = document.querySelectorAll('.check');
let id = 0;
function addElement(){
    if (input.value === ''){
        alert('You need to input a value');
        return;
    }
    let li = document.createElement('li');
    li.innerHTML = `<li class="tl-task">
            <label><input type="checkbox" class="check"></label>
            ${input.value}
            
        <button class="removeBtn">Remove</button>
        </li>`;
    input.value = '';
    list.append(li);
    check.addEventListener('change',() => lineThrough());
}
function removeElement(){
        list.removeChild(this.target);
}
function lineThrough (){
    if (check.checked === true){
        task.style.textDecoration = 'line-through';
    } else {
        task.style.textDecoration = 'none';
    }
}
addBtn.addEventListener('click',() => addElement());
removeBtn.addEventListener('click', () => removeElement());
check.addEventListener('change',() => lineThrough());