// Write code related to Home page here
let task_arr = JSON.parse(localStorage.getItem("Task List")) || [];
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  let name_value = document.querySelector("#name");
  let desc_value = document.querySelector("#desc");
  let start_date_value = document.querySelector("#start");
  let end_date_value = document.querySelector("#end");
  let priority_value = document.querySelector("#priority");

  if (
    name_value.value == "" ||
    desc_value.value == "" ||
    start_date_value.value == "" ||
    end_date_value.value == "" ||
    priority_value.value == ""
  ) {
    return alert("Cannot be Empty");
  }

  let task_obj = {
    name_value: name_value.value,
    desc_value: desc_value.value,
    start_date_value: start_date_value.value,
    end_date_value: end_date_value.value,
    priority_value: priority_value.value,
  };
  task_arr.push(task_obj);
  localStorage.setItem("Task List", JSON.stringify(task_arr));

  name_value.value = "";
  desc_value.value = "";
  start_date_value.value = "";
  end_date_value.value = "";
  priority_value.value = "";
});
