const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    const text = input.value;

    if(text !== '') {
    const item = createItem(text);
    items.appendChild(item);
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

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const span = document.createElement('span');
    span.setAttribute('class', 'item__name');
    span.innerText = text;

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'item__delete');
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    delBtn.addEventListener('click', event => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(span);
    item.appendChild(delBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

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