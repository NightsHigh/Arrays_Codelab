let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra(textString) {
    /* din map kode her... */
    myExtras.push(extraUdstyr.value);
    updateExtras();

}



function updateExtras() {
    // Clear the list before adding new items
    myExtrasListElement.innerHTML = '';

    /* din map kode her... */
    myExtras.forEach(i => {
        const li = document.createElement('li');
        li.textContent = i;
        myExtrasListElement.appendChild(li);
    });
}









