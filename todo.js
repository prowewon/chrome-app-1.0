const taskForm = document.querySelector(".js-toDoForm"),
    taskInput = taskForm.querySelector(".toDoInput"),
    pendingList = document.querySelector(".js-pendingList"),
    finishedList = document.querySelector(".js-finishedList");

let newId = 0;

const PENDING_LS = "PENDING",
    FINISHED_LS = "FINISHED";

let tasks = [],
    finish = [];

function repaintPending(event) {
    const finId = parseInt(event.target.parentNode.id);
    const finText = finish.filter(function(task) {
        return task.id  == finId;
    });
    paintPending(finText[0].text,finId);
    deletefinshed(event);
}

function deletefinshed(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    const cleanTasks = finish.filter(function(task) {
        return task.id !== parseInt(li.id);
    });
    finish = cleanTasks;
    saveFinished();
}

function saveFinished() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finish));
}

function paintFinished(penId, penText) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const backBtn = document.createElement("button");
    const span = document.createElement("span");

    delBtn.innerText = "X";
    delBtn.setAttribute("class","delBtn");
    delBtn.addEventListener("click", deletefinshed);
    backBtn.innerHTML = "◀";
    backBtn.setAttribute("class", "checkBtn");
    backBtn.addEventListener("click",repaintPending);
    span.innerText = penText;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(backBtn);
    li.id = penId;
    finishedList.appendChild(li);

    const finishObj = {
        id : parseInt(penId),
        text : penText
    };

    finish.push(finishObj);
    saveFinished();
}

//체크 버튼 누르면 일어나는 일
function checkTask(event){
    const penId = event.target.parentNode.id;
    const finishedTask = tasks.filter(function(task) {
        return task.id == parseInt(penId);
    });
    const penText = finishedTask[0].text;

    paintFinished(penId, penText);
    deleteTask(event);
}

//pending에서 지우는 함수
function deleteTask(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanTasks = tasks.filter(function(task) {
        return task.id !== parseInt(li.id);
    });
    tasks = cleanTasks;
    saveTasks();
}

function saveTasks() {
    localStorage.setItem(PENDING_LS, JSON.stringify(tasks));
}

function paintPending(text, newId) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    const span = document.createElement("span");

    delBtn.innerHTML = "X";
    delBtn.setAttribute("class","delBtn");
    delBtn.addEventListener("click", deleteTask);
    checkBtn.innerHTML = "✔";
    checkBtn.setAttribute("class", "checkBtn");
    checkBtn.addEventListener("click",checkTask);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = newId;
    pendingList.appendChild(li);
    const taskObj = {
        id: newId,
        text: text
    };
    tasks.push(taskObj);
    saveTasks();
}

function handelSubmit(event) {
    event.preventDefault();
    const taskValue = taskInput.value;
    
    newId += Math.floor(Math.random()*10000);
    if(taskValue == "") {
        alert("오늘의 할 일을 적어보세요.");
    } else {
        paintPending(taskValue,newId);
        taskInput.value = "";
    }
}

//로컬엥서 finished 가져오기
function loadedFinished() {
    const loadedFinish = localStorage.getItem(FINISHED_LS);
    if(loadedFinish !== null) {
        const parsedTasks = JSON.parse(loadedFinish);
        parsedTasks.forEach(function(task) {
            paintFinished(task.id, task.text);     
        });
    }
}

//로컬에서 tasks 가져오기
function loadTasks() {
    const loadedTasks = localStorage.getItem(PENDING_LS);
    if(loadedTasks !== null) {
        const parsedTasks = JSON.parse(loadedTasks);
        parsedTasks.forEach(function(task) {
            paintPending(task.text,parseInt(task.id));     
        });
    }
}

function init() {
    loadTasks();
    loadedFinished();
    taskForm.addEventListener("submit", handelSubmit);
}

init();