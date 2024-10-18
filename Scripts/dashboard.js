// Write code related to dashboard page here

let task_list = JSON.parse(localStorage.getItem("Task List")) || [];
let progress_list = JSON.parse(localStorage.getItem("priority-list")) || [];
document.querySelector("#task-count").innerText = task_list.length;
function displayTable(tasklist) {
  document.querySelector("tbody").innerHTML = "";
  tasklist.forEach((elem, i) => {
    let table_row = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = elem.name_value;

    let desc = document.createElement("td");
    desc.innerText = elem.desc_value;

    let start_date = document.createElement("td");
    start_date.innerText = elem.start_date_value;

    let end_date = document.createElement("td");
    end_date.innerText = elem.end_date_value;

    let priority = document.createElement("td");
    priority.innerText = elem.priority_value;

    let add = document.createElement("td");
    add.style.cursor = "pointer";
    add.innerText = "Add";
    add.addEventListener("click", () => {
      deleteAndAdd(elem, i);
    });
    document.querySelector("tbody").append(table_row);
    table_row.append(name, desc, start_date, end_date, priority, add);
  });
}
displayTable(task_list);

function deleteAndAdd(elem, i) {
  progress_list.push(elem);
  task_list.splice(i, 1);
  document.querySelector("#task-count").innerText = task_list.length;
  localStorage.setItem("Task List", JSON.stringify(task_list));
  localStorage.setItem("priority-list", JSON.stringify(progress_list));
  displayTable(task_list);
}

  let filter = document.querySelector("#filter");
  filter.addEventListener("change",()=>{
    if (filter.value == "") {
      displayTable(task_list);
      document.querySelector("#task-count").innerText = task_list.length
    } else {
      const new_data = task_list.filter((elem) => {
        return elem.priority_value == filter.value;
      });
      document.querySelector("#task-count").innerText = new_data.length;
      displayTable(new_data);
    }
  })
 
