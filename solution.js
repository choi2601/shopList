const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

let id = 0;

function onAdd() {
    const text = input.value;

        if(text !== '') {
            const item = createItem(text);
            items.append(item);
            item.scrollIntoView({block: 'center'});
            } else {
                console.error('Type Text!');
            }
   
    input.value = '';
    input.focus();
}

function createItem(text) {
    
    
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);

    itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
            <button class="item__delete" ><i class="fas fa-trash-alt" data-id=${id}></i></button>
            </div>
            <div class="item__divider"></div>`;
        id++;

    return itemRow;
}
addBtn.addEventListener('click', event => {
    onAdd();
})

document.addEventListener('keydown', event => {
    console.log('key');
    const keycode = event.keyCode;
    if(keycode === 13) {
        onAdd();
    }
})
items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id) {
        const tobeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        tobeDeleted.remove(); 
    }
})