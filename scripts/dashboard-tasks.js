const createTaskBtn = document.querySelector("#create-task-btn");
const createTaskModal = document.querySelector(".task-create");
const taskBoard = document.querySelector(".task-board");

createTaskBtn.addEventListener("click", () => {
  createTaskModal.style.display = "flex";
  taskBoard.style.display = "none";
});
