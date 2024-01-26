// Write code for the Progress page here

let progress_list_arr = JSON.parse(localStorage.getItem("priority-list")) || [];
let done_list = JSON.parse(localStorage.getItem("done-list")) || [];

function displayTable() {
  document.querySelector("tbody").innerHTML = "";
  progress_list_arr.forEach((elem,i) => {
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

    let done = document.createElement("td");
    done.style.cursor = "pointer";
    done.innerText = "Add";
    done.addEventListener("click", () => {
     deleteAndAdd(elem,i);
    });

    document.querySelector("tbody").append(table_row);
    table_row.append(name, desc, start_date, end_date, priority, done);
  });
}
displayTable();

function deleteAndAdd(elem,i){
  done_list.push(elem);
  progress_list_arr.splice(i,1);
  localStorage.setItem("priority-list",JSON.stringify(progress_list_arr));
  localStorage.setItem("done-list", JSON.stringify(done_list));
  displayTable();
}