function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const now = new Date();
  const timeStamp = now.toLocaleString(); // e.g., "03/07/2025, 11:05 AM"

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div class="timestamp">${timeStamp}</div>
  `;

  document.getElementById("taskList").appendChild(taskItem);
  input.value = "";
}
