const userInput = document.getElementById('userInput')
const enter = document.getElementById('enter')
const ul = document.querySelector('ul')

const li = document.querySelectorAll('li')

function userInputLength () 
{
    return userInput.Value.length
}


function listslength () {
 return li.length
}
   
    
    function createListItems() {
        const li = document.createElement('li')
        li.classList.add('done2')
        li.appendChild(document.createTextNode(userInput.value))
        ul.appendChild(li)
        userInput.value = ''


        function crossOut() {
            // if(li.classList.contains('done2')) {
            //     li.classList.add('done')
            //     li.classList.remove('done2')
            // } else if(!li.classList.contains('done2')) {
            //     li.classList.add('done2')
            //     li.classList.remove('done')

            // } 

            li.classList.toggle('done')
        }
        li.addEventListener('click', crossOut)

        const deleteBtn = document.createElement('button')
        deleteBtn.appendChild(document.createTextNode('X'))
        li.appendChild(deleteBtn)
        deleteBtn.addEventListener('click', deleteListItems)

        function deleteListItems() {
            li.classList.add('delete')
        }
    }

function addListAfterClick() {
        if (userInputLength() > 0) {
            createListElement()
        }
    }
    
    function addListAfterKeypress(e) {
        if (userInputLength() > 0 && e.which === 13) {
            createListElement()
        }
    }

    

    enter.addEventListener('click', addListAfterClick)

    userInput.addEventListener('keypress', addListAfterKeypress)







    