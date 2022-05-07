const list = document.querySelector('.list');
const plusButton = document.querySelector('.plus');

function plusNode() {
    const text = document.querySelector('.text');
    const input = text.value;
    if (input == false) return;
    const newLine = document.createElement('li');
    newLine.setAttribute('class', 'line');
    newLine.innerHTML = covertHTML(input);
    list.append(newLine);
    text.value = '';
    return Promise.resolve([newLine, newLine.querySelector('.trash')]);
}

plusButton.addEventListener('click', () => {
    plusNode()
    .then(obj => {
        obj[1].addEventListener('click', () => {
            obj[0].remove();
        })
    })
})

function covertHTML(input) {
    return `
    <span>${input}</span>
    <button class="trash">
            <i class="fa-solid fa-trash-can"></i>
    </button>
    `
}