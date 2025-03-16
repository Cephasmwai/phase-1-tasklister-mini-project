document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Function to create a new task element
  function createTaskElement(taskDescription) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${taskDescription}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    return li;
  }

  // Add task to the list
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription.trim() === "") {
      alert("Task description cannot be empty!"); // Validate input
      return;
    }

    // Create a new task element and append it to the list
    const newTask = createTaskElement(taskDescription);
    taskList.appendChild(newTask);

    // Clear the input field
    document.getElementById("new-task-description").value = "";
  });

  // Delete functionality
  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove(); // Remove the task
    }
  });

  // Edit functionality
  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-btn")) {
      const taskText = event.target.previousElementSibling; // Get the task text
      const newText = prompt("Edit your task:", taskText.textContent); // Prompt for new text
      if (newText && newText.trim() !== "") {
        taskText.textContent = newText; // Update the task text
      } else {
        alert("Task description cannot be empty!"); // Validate input
      }
    }
  });
});