let list = document.querySelector('.tl-tasks');
let addBtn = document.querySelector('.tl-input-btn');
let input = document.querySelector('.tl-input');

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
    for (const ch of document.querySelectorAll('.check')) {
        ch.addEventListener('change',function (){
            if (this.checked === true){
                this.parentNode.parentNode.style.textDecoration = 'line-through';
            }else {
                this.parentNode.parentNode.style.textDecoration = 'none';
            }
        });
    }
    for (const btn of document.querySelectorAll('.removeBtn')) {
        btn.addEventListener('click', function (){
           this.parentNode.remove();
        });
    }
}
addBtn.addEventListener('click',() => addElement());
