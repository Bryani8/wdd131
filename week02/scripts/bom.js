const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', 
    function() {
        console.log("1");
    if (input.value.trim() !== '') {
        console.log("2");
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';
        input.focus();
    }
    // else {
    //     input.focus();
    // }
})


