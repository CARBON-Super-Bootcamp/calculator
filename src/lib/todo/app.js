require("./app.css");
const { store$, addAction, doneAction, undoneAction, removeAction, clearAllAction } = require("./store");

// view
const input = document.getElementById("todo");
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");
const clear = document.getElementById("todo-clear");

form.onsubmit = (event) => {
  event.preventDefault();
  const task = input.value;
  if (!task?.length) {
    return;
  }
  // dispatch action add
  store$.dispatch(addAction(task));
  input.value = "";
};

// presentation layer
store$.subscribe(() => {
  const state = store$.getState();
  render(state);
});
const state = store$.getState();
render(state);

function render(state) {
  list.innerHTML = "";
  for (let i = 0; i < state.length; i++) {
    const todo = state[i];
    const li = document.createElement("li");
    const btn = document.createElement("BUTTON");
    const check = document.createElement("INPUT");
    li.textContent = todo.task;
    
    check.setAttribute("type", "checkbox");
    check.onclick = function () {
      if (!state[i].done) {
        // dispatch action done
        store$.dispatch(doneAction(i));
      } else {
        // dispatch action undone
        store$.dispatch(undoneAction(i));
      }
    };
    
    btn.innerHTML = 'Hapus';
    btn.onclick = function () {
      // dispatch action remove
      store$.dispatch(removeAction(i));
    };
    
    li.prepend(check);
    li.appendChild(btn);
    if (todo.done) {
      li.className = "todo-done";
      check.checked = true;
    } else {
      li.className = "";
      check.checked = false;
    }
    list.append(li);
  }
}

clear.onclick = (event) => {
  event.preventDefault();
  // dispatch action clearAll
  store$.dispatch(clearAllAction());
};