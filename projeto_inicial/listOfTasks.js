const createTask = (e) => {

    e.preventDefault()
    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const task = document.createElement('li')
    task.classList.add('task')
    const conteudo = `<p class="content"> ${valor}</p>` 
    task.innerHTML = conteudo

    task.appendChild(ButtonDone())
    task.appendChild(DeleteButton())
    list.appendChild(task)
    input.value = " "
    
};

const newTask = document.querySelector('[data-form-button ]');

newTask.addEventListener('click', createTask);

const ButtonDone = () => {
    const buttonDone = document.createElement('button')

    buttonDone.classList.add('check-button')
    buttonDone.innerText = 'Done'
    buttonDone.addEventListener('click', finishTask)

    return buttonDone

}
const finishTask = (e) => {
    const buttonDone = e.target

    const taskDone = buttonDone.parentElement

    taskDone.classList.toggle('done')

}

const DeleteButton = () => {
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click',deleteTask)
    

    return deleteButton
}

const deleteTask = (e) => {

    const deleteButton = e.target
    const taskDone = deleteButton.parentElement
    taskDone.remove()

    return deleteButton


}