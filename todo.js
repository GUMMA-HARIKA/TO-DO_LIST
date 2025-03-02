function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // Set language
    speech.rate = 1; // Adjust speed if needed
    window.speechSynthesis.speak(speech);
}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `${taskText} 
        <button onclick="completeTask(this)">✔</button>
        <button onclick="removeTask(this)">❌</button>`;

    taskList.appendChild(li);
    speak(`Task added: ${taskText}`); // Speak when task is added

    taskInput.value = ""; 
}

function completeTask(button) {
    button.parentElement.classList.toggle("completed");
    speak("Task marked as completed.");
}

function removeTask(button) {
    let taskText = button.parentElement.textContent.trim();
    speak(`Task removed: ${taskText}`);
    button.parentElement.remove();
}
