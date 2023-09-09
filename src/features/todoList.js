import { BUTTON_TEXT } from "../constants/index.js";

import "../main.css";

import editIcon from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";
import addIcon from "../assets/add.svg";

const taskList = document.querySelector(".task-list");
const addTaskInput = document.querySelector(".add-task-form__input");
const addTaskImg = document.querySelector(".add-task-form__add-icon");
addTaskImg.src = addIcon;

const formSubmit = document.querySelector(".add-task-form");
const onAddTask = (event) => {
  event.preventDefault();
  const task = document.querySelector(".add-task-form__input").value;

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-list__item");

  const taskInput = document.createElement("input");
  taskInput.classList.add("task-list__input");
  taskInput.type = "text";
  taskInput.value = task;
  taskInput.readOnly = true;

  taskItem.appendChild(taskInput);

  const actions = document.createElement("div");
  actions.classList.add("task-list__actions");

  const buttonComplete = document.createElement("button");
  buttonComplete.classList.add("button", "button--green", "button--icon");
  buttonComplete.type = "button";
  buttonComplete.innerText = "Edit";

  const completeImg = document.createElement("img");
  completeImg.src = editIcon;
  completeImg.classList.add("task-list__edit-icon", "icon");
  buttonComplete.prepend(completeImg);

  buttonComplete.addEventListener("click", (e) => {
    onCompleteTask(e, taskInput, completeImg);
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("button", "button--red", "button--icon");
  buttonDelete.type = "button";
  buttonDelete.innerText = "Delete";
  buttonDelete.addEventListener("click", () => onDeleteTask(taskItem));

  const deleteImg = document.createElement("img");
  deleteImg.src = deleteIcon;
  deleteImg.classList.add("task-list__delete-icon", "icon");
  buttonDelete.prepend(deleteImg);

  actions.appendChild(buttonComplete);
  actions.appendChild(buttonDelete);

  taskItem.appendChild(actions);

  taskList.appendChild(taskItem);

  addTaskInput.value = "";
  alert("Successfully added task");
};

formSubmit.addEventListener("submit", onAddTask);

const onDeleteTask = (task) => {
  taskList.removeChild(task);
};

const onCompleteTask = (e, task, editIcon) => {
  if (!task.readOnly) {
    task.readOnly = true;
    e.currentTarget.innerText = BUTTON_TEXT.EDIT;
    e.currentTarget.prepend(editIcon);

    return;
  }

  task.removeAttribute("readonly");
  task.focus();
  e.currentTarget.innerText = BUTTON_TEXT.SAVE;
};
