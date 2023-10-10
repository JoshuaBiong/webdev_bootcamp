const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


// adding task function

function addTask() {
    let arr = [];
    if (inputBox.value === '') {
        alert("Write Something")
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        arr.push(inputBox.value)
        console.log(arr)
    }
    inputBox.value = '';

}
// Checked and remove list function


listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
}, false)