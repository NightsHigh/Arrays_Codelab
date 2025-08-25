let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');
const mySelectedElements = document.getElementById('selectedElements');
mySelectedElements.addEventListener("click", removeSelected);
myExtrasInput.addEventListener("change", addExtra);



function addExtra() {
    /* din map kode her... */
    myExtras.push(extraUdstyr.value);
    updateExtras();
}



function updateExtras() {
    // Clear the list before adding new items
    myExtrasListElement.innerHTML = '';
    mySelectedElements.innerHTML = '';
    /* din map kode her... */
    myExtras.forEach(i => {
        const li = document.createElement('li');
        li.textContent = i;
        myExtrasListElement.appendChild(li);


        const newlySelectedOption = document.createElement('option');
        newlySelectedOption.value = i;
        newlySelectedOption.textContent = i;
        mySelectedElements.appendChild(newlySelectedOption);
    });
}


function removeSelected(){
    const selectedOption = mySelectedElements.value;
    myExtras = myExtras.filter(i => i !== selectedOption);
    updateExtras();
}

