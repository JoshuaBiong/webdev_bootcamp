const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

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

    // arr.push(inputBox.value)

    // let tempAr = []
    // tempAr.push(arr++)


    inputBox.value = '';

}