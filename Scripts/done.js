// Write code related to Done page here

let done_list_arr = JSON.parse(localStorage.getItem("done-list")) || [];

function displayTable() {
  document.querySelector("tbody").innerHTML = "";
  done_list_arr.forEach((elem) => {
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

    document.querySelector("tbody").append(table_row);
    table_row.append(name, desc, start_date, end_date, priority);
  });
}
displayTable();