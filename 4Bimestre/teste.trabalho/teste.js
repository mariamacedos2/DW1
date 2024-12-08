// Seleciona os elementos da interface
const taskInput = document.getElementById('caixa_tarefa');
const addButton = document.getElementById('adicionar_tar');
const taskList = document.getElementById('lista_tar');
const completedCounter = document.getElementById('tar_concluida');

// Contador de tarefas concluídas
let completedTasks = 0;

// Função para adicionar uma tarefa
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Por favor, insira uma tarefa!');
    return;
  }

  // Cria os elementos da tarefa
  const taskItem = document.createElement('li');
  taskItem.style.display = "flex";
  taskItem.style.justifyContent = "space-between";
  taskItem.style.alignItems = "center";
  taskItem.style.margin = "5px 0";
  
  const taskLabel = document.createElement('span');
  taskLabel.textContent = taskText;

  const buttonsDiv = document.createElement('div');

  // Botão para marcar como concluída
  const doneButton = document.createElement('button');
  doneButton.textContent = '✔️';
  doneButton.style.backgroundColor = "hsl(0,80%,73%)";
  doneButton.addEventListener('click', () => markTaskAsDone(taskItem,doneButton));

  // Botão para excluir
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑️';
  deleteButton.addEventListener('click', () => deleteTask(taskItem));

  
  buttonsDiv.appendChild(doneButton);
  buttonsDiv.appendChild(deleteButton)

  // Monta a tarefa e adiciona à lista
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(buttonsDiv)
  taskList.appendChild(taskItem);

  // Limpa o campo de entrada
  taskInput.value = '';
}

// Função para marcar uma tarefa como concluída
function markTaskAsDone(taskItem) {
  taskItem.style.textDecoration = 'line-through';
  taskItem.style.color = 'gray';
  
}

// Função para excluir uma tarefa
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

// Adiciona evento ao botão de adicionar
addButton.addEventListener('click', addTask);

// Permite adicionar a tarefa pressionando Enter
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
