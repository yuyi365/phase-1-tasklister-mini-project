/*
  USER TASKS
  1. Type a task into the input field.
  2. Click some form of a submit button.
  3. See the task string that I provided appear in the DOM after the submit button has been activated.
*/

//grab elements and turn to variables

const form = document.getElementById('create-task-form');
const list = document.getElementById('tasks');
const taskInput = document.getElementById('new-task-description');

form.addEventListener('submit', event => {
  event.preventDefault();
  addToDoList();
})

const addToDoList = () => {
  // get input VALUES
  const task = taskInput.value;

  // create li items
  const li = document.createElement('li');
  
  // add li items to the list variable
  li.textContent = `I have to ${task}!`

  // add/append the input tasks to the list
  list.append(li);

  // create BUTTON
  const bttn = document.createElement('button');
  
  // add text to the button
  bttn.textContent = "done"

  // add/append the button to the individual li item
  li.append(bttn);
  
  bttn.addEventListener('click', () => {
    bttn.parentNode.remove();
  })
  
  form.reset();
}
