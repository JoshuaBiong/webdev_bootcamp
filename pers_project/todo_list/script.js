const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// adding task function

function addTask(e) {


    let arr = [];

    if (inputBox.value === '') {
        alert("Write Something")
    } else {


        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)

        // arr.push(inputBox.value)
        // console.log(arr)
    }
    inputBox.value = '';
    saveData();


}
// Checked and remove list function



listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData();
    }
}, false)

// saving data from local storage

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

//showing data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();