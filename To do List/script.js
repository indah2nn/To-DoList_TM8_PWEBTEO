let taskId = 0;
let tasksArray = [];

function createTask() {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;
    let dueDate = document.getElementById('due-date').value;
    let urgency = document.getElementById('urgency').value;
    let position = document.getElementById('position').value;

    if (!title) {
        alert('Task Title wajib diisi!');
        return;
    }

    taskId++;
    let card = document.createElement('div');
    card.className = 'task-card';
    card.id = 'task-' + taskId;
    card.setAttribute('data-urgency', urgency);
    card.innerHTML = `
        <div class="task-title">📌 ${title}</div>
        <div class="task-desc">${desc || 'Tidak ada deskripsi'}</div>
        <div class="task-date">📅 ${dueDate || 'Tidak ada tanggal'}</div>
        <div class="task-urgency">🏷️ ${urgency}</div>
        <button class="delete-btn" onclick="deleteTask('task-${taskId}')">Hapus</button>
    `;

    let targetList;
    if (position === 'To-Do') targetList = document.getElementById('todo-list');
    else if (position === 'In Progress') targetList = document.getElementById('progress-list');
    else targetList = document.getElementById('done-list');

    targetList.appendChild(card);

    tasksArray.push({ id: 'task-' + taskId, title: title, urgency: urgency, status: position });

    // Reset form
    document.getElementById('title').value = '';
    document.getElementById('desc').value = '';
    document.getElementById('due-date').value = '';
}

function deleteTask(id) {
    let card = document.getElementById(id);
    if (card) card.remove();

    tasksArray = tasksArray.filter(task => task.id !== id);

    const totalTugas = tasksArray.reduce((total) => total + 1, 0);
    console.log('📊 Total tugas:', totalTugas);
    console.log('📋 Isi array:', tasksArray);
}
