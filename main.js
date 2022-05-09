const ul = document.querySelector('.list');
const plusButton = document.querySelector('.plus');
const text = document.querySelector('.text');

function addNode() {
    return new Promise((resolve, reject) => {
        const input = text.value;
        if (!input) { reject(new Error('값을 입력하지 않았다.')); }
        else {
            const newNode = createNode(input);
            ul.append(newNode);
            newNode.scrollIntoView({block: 'end'});
            resetInput(text);
            resolve({willDeleteNode: newNode, trashBtn: newNode.querySelector('.trash')});
        }
    });
}

function createNode(input) {
    const createdNode = document.createElement('li');
    createdNode.setAttribute('class', 'line');
    createdNode.innerHTML = convertHTML(input);
    return createdNode;
}

function convertHTML(input) {
    return `
    <div class="item">
        <span>${input}</span>
        <button class="trash">
                <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>
    <div class="divider"></div>
    `;
}

function resetInput(text) {
    text.value = '';
    text.focus();
}

plusButton.addEventListener('click', () => {
    addNode()
    .then(resolve => {
        resolve.trashBtn.addEventListener('click', () => {
            resolve.willDeleteNode.remove();
            text.focus()
        })
    })
    .catch(console.log)
    .finally(text.focus());
})

