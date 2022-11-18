// access most important DOM elements
const formBox = document.querySelector('.create-item-form')
const closeBoxButton = document.querySelector('.close-btn')
const addButton = document.querySelector('.add')
const saveButton = document.querySelector('.save')
const closeButton = document.querySelector('.close')
const objectList = document.querySelector('.obj-list')
const sortByName = document.querySelector('.sort-name')
const sortByCategory = document.querySelector('.sort-name')


// click on add item button
addButton.addEventListener('click', () => {
        formBox.style.display = 'block'
        addButton.style.background = "rgb(62, 101, 57)"
})

// click on close item button
closeButton.addEventListener('click', () => {
        formBox.style.display = 'none'
        addButton.style.background = "rgb(155, 255, 142)"
})

// array with all objects added through form
let itemArray = []

// counter which helps access objects in array
let counter = 0

// click on save item button
// create object from input values
saveButton.addEventListener('click', () => {

        // check if all data is provided
        if (!document.querySelector('#name').value ||
                !document.querySelector('#category').value ||
                !document.querySelector('#description').value
        ) {
                alert('Make sure you input all the required data')
                return
        }

        //display the list element on page (with objects from user)
        objectList.style.display = 'block'

        // create object from user's input
        let item = {
                name: document.querySelector('#name').value,
                category: document.querySelector('#category').value,
                description: document.querySelector('#description').value,
        }

        // add object to list element
        itemArray.push(item)

        // resest the input element
        const name = document.querySelector('#name')
        const category = document.querySelector('#category')
        const description = document.querySelector('#description')
        name.value = ''
        category.value = ''
        description.value = ''

        // run function which prints object to DOM
        addObjectToPage()

        // update counter
        counter++
})

function addObjectToPage() {
        objectList.innerHTML += `
                <div class="object object${counter}">
                        <div><span class="describe" class="element"><span class="focus">Name:</span> ${itemArray[counter].name}</span></div>
                        <div><span class="describe"><span class="focus">Category:</span> ${itemArray[counter].category}</span></div>
                        <div><span class="describe"><span class="focus">Description:</span> ${itemArray[counter].description}</span></div>
                        <div>
                        <a href="#" class="btn remove remove-object${counter}">delete</a>
                        </div>
                </div>
        `
        // remove item event listener
        const removeObjectBtn = document.querySelectorAll('.remove')

        // add event listener to remove button of each element
        // create function which deletes the object
        removeObjectBtn.forEach(btn => btn.addEventListener('click', () => {


                let className = String(btn.classList[2])
                let classNumber = Number(className.split('').filter(char => Number(char) >= 0))
                removeObject(classNumber)

        }))
}

function removeObject(objectIndex) {
        document.querySelector(`.object${objectIndex}`).style.display = 'none'
}

// sort by name


// sort by category