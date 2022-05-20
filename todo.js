const inputValue = document.getElementById("input");
const addTodo = document.getElementById("button");
const todoList = document.getElementById("todo-list");

addTodo.addEventListener("click" , (e) => {
    e.preventDefault();
    const todo = inputValue.value ;
    const lsitOfTodo = document.createElement("li");
    lsitOfTodo.innerText = todo ;
    if(todo){
        let Div = document.createElement("div");
        Div.classList.add("Div");
        let doneBtn = document.createElement("button");
        doneBtn.classList.add("done-btn");
        doneBtn.innerText = "done";
        let delBtn = document.createElement("button");
        delBtn.classList.add("del-btn");
        delBtn.innerText = "delete";
        todoList.append(Div)
        Div.append(lsitOfTodo);
        Div.append(doneBtn);
        Div.append(delBtn);
    }else{
        alert("please type anything....")
    }
    inputValue.value = "" ;
})

todoList.addEventListener("click" , taskManage);

function taskManage (event) {
    let item = event.target ;
    if(item.classList[0] === "done-btn"){
        const parent = item.parentElement ;
        parent.classList.toggle("task-done")
    } else if (item.classList[0] === "del-btn") {
        const parent = item.parentElement ;
        parent.remove();
    }
}